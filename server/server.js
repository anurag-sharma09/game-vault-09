require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const gameRoutes = require('./routes/gameRoutes');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const errorHandler = require('./middleware/errorHandler');

const initializeSystem = async () => {
  console.log('⚡ ANTIGRAVITY GAMES — SYSTEM BOOT');
  try {
    await connectDB();
    console.log('[SUCCESS] Database Cluster: Synchronized');
  } catch (err) {
    console.error('[CRITICAL] Database Sync Failed:', err.message);
  }
};

initializeSystem();

const app = express();

app.use(cors({ origin: ['http://localhost:5173', 'http://localhost:5174'] }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    status: 'ONLINE',
    uptime: process.uptime(),
    node: process.version,
    message: '⚡ AntiGravity Games API: Active',
  });
});

app.use('/api/games', gameRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/reviews', reviewRoutes);

app.use((req, res) => {
  res.status(404).json({ success: false, message: `Route ${req.originalUrl} not found` });
});

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`⚡ AntiGravity Games API: http://localhost:${PORT}`);
});
