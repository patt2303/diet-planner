// src/components/MealPlan.js
import React from 'react';
import { Button } from 'react-bootstrap';

const MealPlan = () => {
  return (
    <div className="container">
      <h2>Your Personalized Meal Plan</h2>
      <div>
        <h3>Breakfast</h3>
        <p>Avocado Toast</p>
        <p>Calories: 300 | Protein: 10g | Carbs: 20g</p>
        <Button variant="link">View Recipe</Button>
        <Button variant="link">Add to Favorites</Button>
      </div>
      <div>
        <h3>Lunch</h3>
        <p>Grilled Chicken Salad</p>
        <p>Calories: 500 | Protein: 30g | Carbs: 15g</p>
        <Button variant="link">View Recipe</Button>
        <Button variant="link">Add to Favorites</Button>
      </div>
      <div>
        <h3>Dinner</h3>
        <p>Stir-Fried Vegetables with Rice</p>
        <p>Calories: 450 | Protein: 12g | Carbs: 50g</p>
        <Button variant="link">View Recipe</Button>
        <Button variant="link">Add to Favorites</Button>
      </div>
      <Button variant="info">Download Grocery List</Button>
    </div>
  );
};

export default MealPlan;
