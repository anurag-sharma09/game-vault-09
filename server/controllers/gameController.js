const Game = require('../models/Game');

/**
 * @desc    Get all games with filtering, sorting, pagination
 * @route   GET /api/games
 * @access  Public
 */
const getGames = async (req, res) => {
  try {
    const {
      page = 1,
      limit = 12,
      genre,
      platform,
      isFree,
      sort = 'rating',
      tag,
    } = req.query;

    const filter = {};
    if (genre) filter.genre = genre;
    if (platform) filter.platform = { $in: [platform] };
    if (isFree !== undefined) filter.isFree = isFree === 'true';
    if (tag) filter.tags = { $in: [tag] };

    const sortOptions = {
      rating: { rating: -1 },
      views: { views: -1 },
      newest: { releaseYear: -1 },
      title: { title: 1 },
    };
    const sortObj = sortOptions[sort] || { rating: -1 };

    const skip = (Number(page) - 1) * Number(limit);

    const [games, total] = await Promise.all([
      Game.find(filter).sort(sortObj).skip(skip).limit(Number(limit)),
      Game.countDocuments(filter),
    ]);

    res.json({
      success: true,
      data: games,
      pagination: {
        total,
        page: Number(page),
        limit: Number(limit),
        pages: Math.ceil(total / Number(limit)),
      },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

/**
 * @desc    Get single game by ID (also increments view count)
 * @route   GET /api/games/:id
 * @access  Public
 */
const getGameById = async (req, res) => {
  try {
    const game = await Game.findByIdAndUpdate(
      req.params.id,
      { $inc: { views: 1 } },
      { new: true }
    );

    if (!game) {
      return res.status(404).json({ success: false, message: 'Game not found' });
    }

    res.json({ success: true, data: game });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

/**
 * @desc    Search games by title / description / tags (full-text)
 * @route   GET /api/games/search?q=<query>
 * @access  Public
 */
const searchGames = async (req, res) => {
  try {
    const { q, page = 1, limit = 12 } = req.query;
    if (!q) return res.json({ success: true, data: [], pagination: {} });

    const skip = (Number(page) - 1) * Number(limit);

    const filter = { $text: { $search: q } };
    const [games, total] = await Promise.all([
      Game.find(filter, { score: { $meta: 'textScore' } })
        .sort({ score: { $meta: 'textScore' } })
        .skip(skip)
        .limit(Number(limit)),
      Game.countDocuments(filter),
    ]);

    res.json({
      success: true,
      data: games,
      pagination: {
        total,
        page: Number(page),
        limit: Number(limit),
        pages: Math.ceil(total / Number(limit)),
      },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

/**
 * @desc    Get trending games (high views * rating score)
 * @route   GET /api/games/trending
 * @access  Public
 */
const getTrendingGames = async (req, res) => {
  try {
    const { limit = 8 } = req.query;
    const games = await Game.find({ rating: { $gte: 7 } })
      .sort({ views: -1, rating: -1 })
      .limit(Number(limit));
    res.json({ success: true, data: games });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

/**
 * @desc    Get free games
 * @route   GET /api/games/free
 * @access  Public
 */
const getFreeGames = async (req, res) => {
  try {
    const { limit = 8 } = req.query;
    const games = await Game.find({ isFree: true })
      .sort({ rating: -1 })
      .limit(Number(limit));
    res.json({ success: true, data: games });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

/**
 * @desc    Get low-end PC games
 * @route   GET /api/games/lowend
 * @access  Public
 */
const getLowEndGames = async (req, res) => {
  try {
    const { limit = 8 } = req.query;
    const games = await Game.find({ tags: { $in: ['low-end'] } })
      .sort({ rating: -1 })
      .limit(Number(limit));
    res.json({ success: true, data: games });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

/**
 * @desc    Create a new game (Admin only)
 * @route   POST /api/games
 * @access  Private (Admin)
 */
const createGame = async (req, res) => {
  try {
    const game = await Game.create(req.body);
    res.status(201).json({ success: true, data: game });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/**
 * @desc    Update a game (Admin only)
 * @route   PUT /api/games/:id
 * @access  Private (Admin)
 */
const updateGame = async (req, res) => {
  try {
    const game = await Game.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!game) {
      return res.status(404).json({ success: false, message: 'Game not found' });
    }
    res.json({ success: true, data: game });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/**
 * @desc    Delete a game (Admin only)
 * @route   DELETE /api/games/:id
 * @access  Private (Admin)
 */
const deleteGame = async (req, res) => {
  try {
    const game = await Game.findByIdAndDelete(req.params.id);
    if (!game) {
      return res.status(404).json({ success: false, message: 'Game not found' });
    }
    res.json({ success: true, message: 'Game deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  getGames,
  getGameById,
  searchGames,
  getTrendingGames,
  getFreeGames,
  getLowEndGames,
  createGame,
  updateGame,
  deleteGame,
};
