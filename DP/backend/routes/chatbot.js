// backend/routes/chatbot.js
const express = require('express');
const axios = require('axios');
const router = express.Router();

const DIALOGFLOW_API_URL = 'https://api.dialogflow.com/v1/query';
const DIALOGFLOW_ACCESS_TOKEN = 'your_dialogflow_access_token';

router.post('/query', async (req, res) => {
    const { queryText } = req.body;
    try {
        const response = await axios.post(DIALOGFLOW_API_URL, {
            query: queryText,
            lang: 'en',
            sessionId: '12345'
        }, {
            headers: { 'Authorization': `Bearer ${DIALOGFLOW_ACCESS_TOKEN}` }
        });
        res.status(200).json(response.data.result.fulfillment.speech);
    } catch (err) {
        res.status(500).json({ error: 'Failed to process query' });
    }
});

module.exports = router;
