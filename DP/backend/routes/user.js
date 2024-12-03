// routes/user.js
const express = require('express');
const User = require('../models/User');
const router = express.Router();

// Create or update user profile
router.post('/profile', async (req, res) => {
  const { uid, name, age, gender, height, weight, dietaryPreferences, fitnessGoal } = req.body;
  try {
    let user = await User.findOne({ uid });
    if (!user) {
      user = new User({ uid, name, age, gender, height, weight, dietaryPreferences, fitnessGoal });
    } else {
      user.name = name || user.name;
      user.age = age || user.age;
      user.gender = gender || user.gender;
      user.height = height || user.height;
      user.weight = weight || user.weight;
      user.dietaryPreferences = dietaryPreferences || user.dietaryPreferences;
      user.fitnessGoal = fitnessGoal || user.fitnessGoal;
    }
    await user.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
