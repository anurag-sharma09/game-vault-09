require('dotenv').config();
const mongoose = require('mongoose');
const Game = require('../models/Game');
const { games } = require('./seedGamesData');

const seedDB = async () => {
  try {
    const mongoUri = process.env.MONGO_URI;
    if (!mongoUri) {
      console.error('❌ No MONGO_URI found. Seeding requires a persistent database or this script should be integrated into the in-memory startup.');
      process.exit(1);
    }

    await mongoose.connect(mongoUri);
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
