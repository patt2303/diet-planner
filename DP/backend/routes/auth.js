// routes/auth.js
const express = require('express');
const admin = require('../config/firebase');
const router = express.Router();

// Sign up route
router.post('/signup', async (req, res) => {
  const { email, password } = req.body;
  try {
    const userRecord = await admin.auth().createUser({
      email,
      password,
    });
    res.status(201).json({ message: 'User created successfully!', uid: userRecord.uid });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Login route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const userRecord = await admin.auth().getUserByEmail(email);
    // In production, validate password too
    res.status(200).json({ message: 'User logged in successfully!', uid: userRecord.uid });
  } catch (error) {
    res.status(400).json({ error: 'Invalid credentials' });
  }
});

router.post('/verifyToken', async (req, res) => {
  const { token } = req.body;
  try {
      const decodedToken = await admin.auth().verifyIdToken(token);
      res.json({ uid: decodedToken.uid, email: decodedToken.email });
  } catch (error) {
      res.status(401).json({ error: 'Invalid token' });
  }
});

module.exports = router;
