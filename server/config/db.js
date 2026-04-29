const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

/**
 * Connect to MongoDB using the MONGO_URI from .env
 * Falls back to an in-memory database if no URI is provided
 */
const connectDB = async () => {
  try {
    let mongoUri = process.env.MONGO_URI;
    let isInMemory = false;

    if (!mongoUri) {
      console.log('⚠️ No MONGO_URI found in .env. Starting in-memory MongoDB...');
      const mongoServer = await MongoMemoryServer.create();
      mongoUri = mongoServer.getUri();
      isInMemory = true;
    }

    const conn = await mongoose.connect(mongoUri);
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);

    // Seed if in-memory (since it's empty on every start)
    if (isInMemory) {
      await seedInMemoryDB();
    }
  } catch (error) {
    console.error(`❌ MongoDB Connection Error: ${error.message}`);
    process.exit(1);
  }
};

/**
 * Helper to seed the in-memory database with initial data
 */
const seedInMemoryDB = async () => {
  try {
    const Game = require('../models/Game');
    const { games: gamesData } = require('../scripts/seedGamesData');
    
    const count = await Game.countDocuments();
    if (count === 0) {
      console.log('🌱 Seeding in-memory database...');
      await Game.insertMany(gamesData);
      console.log(`🎮 Seeded ${gamesData.length} games successfully!`);
    }
  } catch (error) {
    console.error('❌ In-memory seeding error:', error.message);
  }
};

module.exports = connectDB;
