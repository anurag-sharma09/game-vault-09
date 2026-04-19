const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');

/**
 * Generate JWT token for admin
 */
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || '7d',
  });
};

/**
 * @desc    Register first admin (can be disabled after setup)
 * @route   POST /api/auth/register
 * @access  Public (one-time setup)
 */
const registerAdmin = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Only allow one admin (comment out this check once you want multi-admin)
    const existingCount = await Admin.countDocuments();
    if (existingCount >= 1) {
      return res.status(403).json({
        success: false,
        message: 'Admin already registered. Contact superadmin.',
      });
    }

    const admin = await Admin.create({ username, email, password });

    const token = generateToken(admin._id);
    res.status(201).json({
      success: true,
      token,
      admin: { id: admin._id, username: admin.username, email: admin.email },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/**
 * @desc    Admin login
 * @route   POST /api/auth/login
 * @access  Public
 */
const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ success: false, message: 'Email and password required' });
    }

    // Explicitly select password (it's excluded by default)
    const admin = await Admin.findOne({ email }).select('+password');
    if (!admin || !(await admin.comparePassword(password))) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }

    const token = generateToken(admin._id);
    res.json({
      success: true,
      token,
      admin: { id: admin._id, username: admin.username, email: admin.email },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

/**
 * @desc    Get current logged in admin profile
 * @route   GET /api/auth/me
 * @access  Private
 */
const getMe = async (req, res) => {
  res.json({
    success: true,
    admin: {
      id: req.admin._id,
      username: req.admin.username,
      email: req.admin.email,
    },
  });
};

module.exports = { registerAdmin, loginAdmin, getMe };
