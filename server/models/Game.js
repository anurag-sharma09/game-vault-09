const mongoose = require('mongoose');

/**
 * Game Schema — core data model for GameVault
 */
const gameSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Game title is required'],
      trim: true,
      index: true,
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
    },
    genre: {
      type: String,
      required: true,
      enum: [
        'Action', 'RPG', 'Strategy', 'Sports', 'Horror',
        'Puzzle', 'Adventure', 'Simulation', 'Racing',
        'Fighting', 'Shooter', 'MOBA', 'Battle Royale', 'Indie',
      ],
    },
    platform: {
      type: [String],
      required: true,
      enum: ['PC', 'Mobile', 'Console', 'Cross-Platform'],
    },
    imageUrl: {
      type: String,
      required: [true, 'Image URL is required'],
    },
    bannerUrl: {
      type: String,
      default: '',
    },
    rating: {
      type: Number,
      min: 0,
      max: 10,
      default: 0,
    },
    systemRequirements: {
      os: { type: String, default: 'Windows 10 64-bit' },
      cpu: { type: String, default: 'Intel Core i5' },
      ram: { type: String, default: '8 GB' },
      gpu: { type: String, default: 'NVIDIA GTX 1060' },
      storage: { type: String, default: '20 GB' },
    },
    officialDownloadLink: {
      type: String,
      required: [true, 'Official download link is required'],
    },
    downloadSource: {
      type: String,
      enum: ['Steam', 'Epic Games', 'Play Store', 'App Store', 'GOG', 'Battle.net', 'Origin', 'Official Site'],
      required: true,
    },
    tags: {
      type: [String],
      default: [],
      // e.g. ['free', 'low-end', 'multiplayer', 'open-world', 'singleplayer']
    },
    isFree: {
      type: Boolean,
      default: false,
    },
    price: {
      type: String,
      default: 'Free',
    },
    developer: {
      type: String,
      default: 'Unknown',
    },
    publisher: {
      type: String,
      default: 'Unknown',
    },
    releaseYear: {
      type: Number,
      default: new Date().getFullYear(),
    },
    views: {
      type: Number,
      default: 0,
    },
    isTrending: {
      type: Boolean,
      default: false,
    },
    screenshots: {
      type: [String],
      default: [],
    },
  },
  { timestamps: true }
);

// Text index for full-text search on title and description
gameSchema.index({ title: 'text', description: 'text', tags: 'text' });

// Virtual: compute trending score
gameSchema.virtual('trendingScore').get(function () {
  return this.views * 0.4 + this.rating * 0.6;
});

const Game = mongoose.model('Game', gameSchema);
module.exports = Game;
