const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const {
  getGames,
  getGameById,
  searchGames,
  getTrendingGames,
  getFreeGames,
  getLowEndGames,
  createGame,
  updateGame,
  deleteGame,
} = require('../controllers/gameController');

// Public routes — must be above /:id to avoid route conflicts
router.get('/search', searchGames);
router.get('/trending', getTrendingGames);
router.get('/free', getFreeGames);
router.get('/lowend', getLowEndGames);

// General routes
router.route('/').get(getGames).post(protect, createGame);
router.route('/:id').get(getGameById).put(protect, updateGame).delete(protect, deleteGame);

module.exports = router;
