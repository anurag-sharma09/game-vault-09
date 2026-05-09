import express from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import mongoose from 'mongoose';

const router = express.Router();

// Middleware to check DB connection
const checkDB = (req, res, next) => {
  if (mongoose.connection.readyState !== 1) {
    console.error('[AUTH] Database disconnected');
    return res.status(503).json({
      success: false,
      message: 'Database connection is currently unavailable'
    });
  }
  next();
};

// @route   POST api/auth/register
// @desc    Register user
router.post('/register', checkDB, async (req, res) => {
  console.log('[AUTH] Register Request:', req.body.email);
  try {
    const { email, password, playerTag } = req.body;

    if (!email || !password || !playerTag) {
      return res.status(400).json({
        success: false,
        message: 'Please provide email, password, and player tag'
      });
    }

    let user = await User.findOne({ email });
    if (user) {
      console.log('[AUTH] Registration failed: User exists');
      return res.status(400).json({
        success: false,
        message: 'User already exists'
      });
    }

    user = new User({ email, password, playerTag });
    await user.save();
    console.log('[AUTH] User saved:', user.email);

    const payload = { user: { id: user.id } };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: '30d' },
      (err, token) => {
        if (err) throw err;
        console.log('[AUTH] Registration success');
        res.status(201).json({
          success: true,
          token,
          user: { id: user.id, email: user.email, playerTag: user.playerTag }
        });
      }
    );
  } catch (err) {
    console.error('[AUTH] Registration error:', err.message);
    res.status(500).json({
      success: false,
      message: 'Server error during registration'
    });
  }
});

// @route   POST api/auth/login
router.post('/login', checkDB, async (req, res) => {
  console.log('[AUTH] Login Request:', req.body.email);
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Please provide email and password'
      });
    }

    let user = await User.findOne({ email });
    if (!user) {
      console.log('[AUTH] Login failed: User not found');
      return res.status(400).json({
        success: false,
        message: 'Invalid credentials'
      });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      console.log('[AUTH] Login failed: Password mismatch');
      return res.status(400).json({
        success: false,
        message: 'Invalid credentials'
      });
    }

    const payload = { user: { id: user.id } };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: '30d' },
      (err, token) => {
        if (err) throw err;
        console.log('[AUTH] Login success');
        res.status(200).json({
          success: true,
          token,
          user: { id: user.id, email: user.email, playerTag: user.playerTag }
        });
      }
    );
  } catch (err) {
    console.error('[AUTH] Login error:', err.message);
    res.status(500).json({
      success: false,
      message: 'Server error during login'
    });
  }
});

// @route   GET api/auth/me
router.get('/me', checkDB, async (req, res) => {
  try {
    const token = req.header('x-auth-token');
    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'No token, authorization denied'
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.user.id).select('-password');
    
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    res.status(200).json({
      success: true,
      user
    });
  } catch (err) {
    console.error('[AUTH] Token verification error:', err.message);
    res.status(401).json({
      success: false,
      message: 'Token is not valid'
    });
  }
});

export default router;
