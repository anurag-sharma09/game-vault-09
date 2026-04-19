const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const { registerAdmin, loginAdmin, getMe } = require('../controllers/authController');

router.post('/register', registerAdmin);
router.post('/login', loginAdmin);
router.get('/me', protect, getMe);

module.exports = router;
