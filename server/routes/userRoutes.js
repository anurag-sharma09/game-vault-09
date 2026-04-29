const express = require('express');
const router = express.Router();
const { protectUser } = require('../middleware/userAuthMiddleware');
const {
  registerUser,
  loginUser,
  getMe,
  updateProfile,
  toggleFavorite,
  logPlayed,
  logDownload,
} = require('../controllers/userController');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/me', protectUser, getMe);
router.put('/me', protectUser, updateProfile);
router.post('/favorites/:gameId', protectUser, toggleFavorite);
router.post('/played/:gameId', protectUser, logPlayed);
router.post('/download/:gameId', protectUser, logDownload);

module.exports = router;
