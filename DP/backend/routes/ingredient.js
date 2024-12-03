// backend/routes/ingredient.js
const axios = require('axios');
const express = require('express');
const router = express.Router();

const EDAMAM_API_KEY = 'your_edamam_api_key';
const EDAMAM_APP_ID = 'your_edamam_app_id';

router.post('/ingredients', async (req, res) => {
    const { ingredients } = req.body;
    try {
        const response = await axios.get('https://api.edamam.com/api/recipes/v2', {
            params: {
                type: 'public',
                q: ingredients.join(','),
                app_id: EDAMAM_APP_ID,
                app_key: EDAMAM_API_KEY,
            }
        });
        res.status(200).json(response.data.hits);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch ingredient-based meals' });
    }
});

module.exports = router;
