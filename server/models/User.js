const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, 'Username is required'],
      unique: true,
      trim: true,
      minlength: 3,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      minlength: 6,
      select: false,
    },
    avatar: {
      type: String,
      default: '',
    },
    bio: {
      type: String,
      default: '',
      maxlength: 200,
    },
    favorites: [
      { type: mongoose.Schema.Types.ObjectId, ref: 'Game' }
    ],
    recentlyPlayed: [
      {
        game: { type: mongoose.Schema.Types.ObjectId, ref: 'Game' },
        playedAt: { type: Date, default: Date.now },
      },
    ],
    downloadHistory: [
      {
        game: { type: mongoose.Schema.Types.ObjectId, ref: 'Game' },
        platform: { type: String, enum: ['pc', 'android', 'ios', 'console', 'browser'] },
        downloadedAt: { type: Date, default: Date.now },
      },
    ],
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user',
    },
  },
  { timestamps: true }
);

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

userSchema.methods.comparePassword = async function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

const User = mongoose.model('User', userSchema);
module.exports = User;
