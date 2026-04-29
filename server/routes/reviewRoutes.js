const express = require('express');
const router = express.Router();
const { protectUser } = require('../middleware/userAuthMiddleware');
const { getReviews, addReview, deleteReview } = require('../controllers/reviewController');

router.get('/:gameId', getReviews);
router.post('/:gameId', protectUser, addReview);
router.delete('/:reviewId', protectUser, deleteReview);

module.exports = router;
