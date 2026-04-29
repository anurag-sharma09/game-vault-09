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

// Antigravity In-Memory Cache Protocol
const routeCache = new Map();
const cacheNode = (req, res, next) => {
  const key = req.originalUrl || req.url;
  if (routeCache.has(key)) return res.json(routeCache.get(key));
  
  const originalJson = res.json;
  res.json = (body) => {
    routeCache.set(key, body);
    originalJson.call(res, body);
  };
  next();
};

// Public routes — cached for zero-latency neural syncs
router.get('/search', cacheNode, searchGames);
router.get('/trending', cacheNode, getTrendingGames);
router.get('/free', cacheNode, getFreeGames);
router.get('/lowend', cacheNode, getLowEndGames);

// General routes
router.route('/').get(getGames).post(protect, createGame);
router.route('/:id').get(getGameById).put(protect, updateGame).delete(protect, deleteGame);

module.exports = router;
