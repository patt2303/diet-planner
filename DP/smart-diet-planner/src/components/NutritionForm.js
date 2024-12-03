import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NutritionForm = () => {
  const [nutritionData, setNutritionData] = useState(null);

  useEffect(() => {
    // Example GET request to fetch nutrition data
    axios.get('https://api.example.com/nutrition')
      .then((response) => {
        setNutritionData(response.data);
      })
      .catch((error) => {
        console.error('There was an error fetching the nutrition data!', error);
      });
  }, []);

  return (
    <div>
      <h2>Nutrition Information</h2>
      {nutritionData ? (
        <pre>{JSON.stringify(nutritionData, null, 2)}</pre>
      ) : (
        <p>Loading nutrition data...</p>
      )}
    </div>
  );
};

export default NutritionForm;
