const Review = require('../models/Review');

/**
 * @desc   Get all reviews for a game
 * @route  GET /api/reviews/:gameId
 * @access Public
 */
const getReviews = async (req, res) => {
  try {
    const reviews = await Review.find({ game: req.params.gameId })
      .sort({ createdAt: -1 })
      .limit(20);
    res.json({ success: true, data: reviews });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

/**
 * @desc   Add a review
 * @route  POST /api/reviews/:gameId
 * @access Private (User)
 */
const addReview = async (req, res) => {
  try {
    const { rating, comment } = req.body;
    const existing = await Review.findOne({ game: req.params.gameId, user: req.user._id });
    if (existing) {
      return res.status(400).json({ success: false, message: 'You already reviewed this game' });
    }

    const review = await Review.create({
      game: req.params.gameId,
      user: req.user._id,
      username: req.user.username,
      rating,
      comment,
    });

    res.status(201).json({ success: true, data: review });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/**
 * @desc   Delete own review
 * @route  DELETE /api/reviews/:reviewId
 * @access Private (User)
 */
const deleteReview = async (req, res) => {
  try {
    const review = await Review.findById(req.params.reviewId);
    if (!review) return res.status(404).json({ success: false, message: 'Review not found' });
    if (review.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({ success: false, message: 'Not authorized' });
    }
    await review.deleteOne();
    res.json({ success: true, message: 'Review deleted' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { getReviews, addReview, deleteReview };
