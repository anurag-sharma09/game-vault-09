import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './db.js';
import authRoutes from './routes/auth.js';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database connection middleware for Vercel Serverless
app.use(async (req, res, next) => {
  await connectDB();
  next();
});

// Custom error handler for JSON parsing
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    console.error('[SERVER] JSON Parsing Error:', err.message);
    return res.status(400).json({
      success: false,
      message: 'Invalid JSON payload'
    });
  }
  next();
});

// Routes
app.use('/api/auth', authRoutes);

// Basic Route
app.get('/', (req, res) => {
  res.send('Game Vault API is running...');
});

// Start Server Locally (Not needed on Vercel)
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`🚀 [SERVER] Running locally on port ${PORT}`);
  });
}

export default app;
