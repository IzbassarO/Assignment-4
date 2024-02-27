const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Define the user schema
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'First name is required'],
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required'],
  },
  username: {
    type: String,
    required: [true, 'Username is required'],
    unique: true,
  },
  role: {
    type: String,
    required: [true, 'Role is required'],
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
  },
});

// Hash the password before saving a new user
userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

// Compile the schema into a model
const User = mongoose.model('User', userSchema);

// Export the model
module.exports = User;