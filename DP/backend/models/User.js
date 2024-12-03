// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  uid: { type: String, required: true, unique: true },
  name: { type: String },
  age: { type: Number },
  gender: { type: String },
  height: { type: Number },
  weight: { type: Number },
  dietaryPreferences: [String],
  fitnessGoal: { type: String },
  ingredientsOnHand: [String],
  mealHistory: [{ meal: String, calories: Number, date: Date }],
});

const User = mongoose.model('User', userSchema);
module.exports = User;
