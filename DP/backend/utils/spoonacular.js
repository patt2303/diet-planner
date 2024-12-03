// utils/spoonacular.js
const axios = require('axios');

const SPOONACULAR_API_KEY = 'your_spoonacular_api_key';

const getMealRecommendations = async (preferences) => {
  try {
    const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch`, {
      params: {
        diet: preferences.diet,
        intolerance: preferences.intolerances,
        number: 5, // Number of meals to return
        apiKey: SPOONACULAR_API_KEY,
      }
    });
    return response.data.results;
  } catch (error) {
    console.error('Error fetching Spoonacular meals', error);
    throw error;
  }
};

module.exports = { getMealRecommendations };
