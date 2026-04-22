require('dotenv').config();
const mongoose = require('mongoose');
const Game = require('../models/Game');

const { games } = require('./seedGamesData');

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ Connected to MongoDB');

    await Game.deleteMany();
    console.log('🗑️  Cleared existing games');

    await Game.insertMany(games);
    console.log(`🎮 Seeded ${games.length} games successfully!`);

    process.exit(0);
  } catch (error) {
    console.error('❌ Seed error:', error.message);
    process.exit(1);
  }
};

seedDB();
