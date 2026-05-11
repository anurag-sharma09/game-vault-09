import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './db.js';
import authRoutes from './routes/auth.js';

dotenv.config();

const app = express();

// Middleware
app.use(cors({
  origin: true, // Allow all for now, but usually you'd restrict to your Vercel domain
  credentials: true
}));

app.use(express.json());

// Database connection middleware for Vercel Serverless
app.use(async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (error) {
    console.error('[SERVER] Database connection error in middleware:', error.message);
    res.status(503).json({
      success: false,
      message: 'Database connection is currently unavailable. Please try again in a few seconds.'
    });
  }
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

// Health Check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', environment: process.env.NODE_ENV || 'development' });
});

// Basic Route
app.get('/', (req, res) => {
  res.send('Game Vault API is running...');
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error('[SERVER] Internal Server Error:', err.stack);
  res.status(500).json({
    success: false,
    message: 'An internal server error occurred'
  });
});

// Start Server Locally (Not needed on Vercel)
if (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test') {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`🚀 [SERVER] Running locally on port ${PORT}`);
  });
}

export default app;
