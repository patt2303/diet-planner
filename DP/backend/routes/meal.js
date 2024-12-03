// backend/routes/meal.js
const express = require('express');
const axios = require('axios');
require('dotenv').config();

const router = express.Router();

// API route to compute meal nutrition using APILeague
router.post('/nutrition', async (req, res) => {
  const { ingredients, servingSize } = req.body;

  try {
    // Send POST request to APILeague to compute nutrition
    const response = await axios.post('https://api.apileague.com/compute-nutrition', {
      ingredients: ingredients,  // List of ingredients
      serving_size: servingSize   // Serving size
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.APILEAGUE_API_KEY}`  // Include your API key
      }
    });

    // Send the response data to the frontend
    res.json(response.data);  // Return computed nutrition data
  } catch (error) {
    console.error('Error fetching nutrition data:', error);
    res.status(500).json({ message: 'Error fetching nutrition data', error });
  }
});

module.exports = router;