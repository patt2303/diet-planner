// src/components/GroceryList.js
import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const GroceryList = () => {
  const history = useNavigate();

  const ingredients = ['Chicken', 'Broccoli', 'Avocados', 'Olive Oil']; // Example ingredients

  const downloadGroceryList = () => {
    // Logic to generate a downloadable grocery list, for example as a CSV or text file
    const list = ingredients.join('\n');
    const blob = new Blob([list], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'grocery_list.txt';
    link.click();
  };

  return (
    <div className="container">
      <h2>Grocery List</h2>
      <div>
        <h3>Ingredients to Buy:</h3>
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>
      <Button variant="success" onClick={downloadGroceryList}>Download Grocery List</Button>
      <Button variant="secondary" onClick={() => history.push('/meal-plan')} className="ml-2">Back to Meal Plan</Button>
    </div>
  );
};

export default GroceryList;
