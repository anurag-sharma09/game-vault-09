import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

let isConnected = false;

const connectDB = async () => {
  if (isConnected) {
    console.log('[DB] Using existing connection');
    return mongoose.connection;
  }

  try {
    const uri = process.env.MONGODB_URI;
    
    if (!uri) {
      throw new Error('MONGODB_URI is not defined in .env');
    }

    console.log('[DB] Connecting to MongoDB...');
    
    const conn = await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 10000,
    });

    isConnected = !!conn.connections[0].readyState;
    console.log(`✅ [DB] MongoDB Connected: ${conn.connection.host}`);
    return conn;
  } catch (error) {
    console.error(`❌ [DB] Connection Error: ${error.message}`);
    return null;
  }
};

export default connectDB;
