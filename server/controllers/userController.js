const jwt = require('jsonwebtoken');
const User = require('../models/User');

const generateToken = (id) =>
  jwt.sign({ id, type: 'user' }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || '7d',
  });

/**
 * @desc   Register a new user
 * @route  POST /api/users/register
 * @access Public
 */
const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({ success: false, message: 'All fields are required' });
    }

    const existing = await User.findOne({ $or: [{ email }, { username }] });
    if (existing) {
      const field = existing.email === email.toLowerCase() ? 'Email' : 'Username';
      return res.status(400).json({ success: false, message: `${field} already in use` });
    }

    const user = await User.create({ username, email, password });
    const token = generateToken(user._id);

    res.status(201).json({
      success: true,
      token,
      user: { id: user._id, username: user.username, email: user.email, avatar: user.avatar, role: user.role },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/**
 * @desc   Login user
 * @route  POST /api/users/login
 * @access Public
 */
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ success: false, message: 'Email and password required' });
    }

    const user = await User.findOne({ email }).select('+password');
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ success: false, message: 'Invalid email or password' });
    }

    const token = generateToken(user._id);
    res.json({
      success: true,
      token,
      user: { id: user._id, username: user.username, email: user.email, avatar: user.avatar, role: user.role },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

/**
 * @desc   Get current user profile + dashboard data
 * @route  GET /api/users/me
 * @access Private (User)
 */
const getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user._id)
      .populate({ path: 'favorites', select: 'title imageUrl genre rating isFree price' })
      .populate({ path: 'recentlyPlayed.game', select: 'title imageUrl genre rating' })
      .populate({ path: 'downloadHistory.game', select: 'title imageUrl genre rating' });

    res.json({ success: true, user });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

/**
 * @desc   Update profile (username, bio, avatar)
 * @route  PUT /api/users/me
 * @access Private (User)
 */
const updateProfile = async (req, res) => {
  try {
    const { username, bio, avatar } = req.body;
    const update = {};
    if (username) update.username = username;
    if (bio !== undefined) update.bio = bio;
    if (avatar !== undefined) update.avatar = avatar;

    const user = await User.findByIdAndUpdate(req.user._id, update, { new: true, runValidators: true });
    res.json({ success: true, user: { id: user._id, username: user.username, email: user.email, avatar: user.avatar, bio: user.bio } });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/**
 * @desc   Toggle favorite game
 * @route  POST /api/users/favorites/:gameId
 * @access Private (User)
 */
const toggleFavorite = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    const gameId = req.params.gameId;
    const isFav = user.favorites.some(id => id.toString() === gameId);

    if (isFav) {
      user.favorites = user.favorites.filter(id => id.toString() !== gameId);
    } else {
      user.favorites.push(gameId);
    }

    await user.save();
    res.json({ success: true, isFavorite: !isFav, favoritesCount: user.favorites.length });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

/**
 * @desc   Log a play event
 * @route  POST /api/users/played/:gameId
 * @access Private (User)
 */
const logPlayed = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    // Remove existing entry if present, then prepend (cap at 20)
    user.recentlyPlayed = user.recentlyPlayed.filter(
      entry => entry.game.toString() !== req.params.gameId
    );
    user.recentlyPlayed.unshift({ game: req.params.gameId, playedAt: new Date() });
    user.recentlyPlayed = user.recentlyPlayed.slice(0, 20);
    await user.save();
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

/**
 * @desc   Log a download event
 * @route  POST /api/users/download/:gameId
 * @access Private (User)
 */
const logDownload = async (req, res) => {
  try {
    const { platform } = req.body;
    const user = await User.findById(req.user._id);
    user.downloadHistory.unshift({ game: req.params.gameId, platform, downloadedAt: new Date() });
    user.downloadHistory = user.downloadHistory.slice(0, 50);
    await user.save();
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { registerUser, loginUser, getMe, updateProfile, toggleFavorite, logPlayed, logDownload };
