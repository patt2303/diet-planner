// src/components/IngredientInput.js
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const IngredientInput = () => {
  const [ingredients, setIngredients] = useState([]);
  const [ingredient, setIngredient] = useState('');
  const history = useNavigate();

  const handleAddIngredient = () => {
    if (ingredient && !ingredients.includes(ingredient)) {
      setIngredients([...ingredients, ingredient]);
      setIngredient('');
    }
  };

  const handleSubmit = () => {
    // Send ingredients data to backend or use in AI recommendation
    history.push('/meal-plan');  // Redirect to meal recommendations page
  };

  return (
    <div className="container">
      <h2>Ingredients on Hand</h2>
      <Form>
        <Form.Group>
          <Form.Label>Enter Ingredients You Have</Form.Label>
          <div className="d-flex">
            <Form.Control
              type="text"
              value={ingredient}
              onChange={(e) => setIngredient(e.target.value)}
            />
            <Button variant="primary" onClick={handleAddIngredient} className="ml-2">+ Add Ingredient</Button>
          </div>
        </Form.Group>
      </Form>
      <h3>Your Ingredients:</h3>
      <ul>
        {ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <Button variant="success" onClick={handleSubmit}>Generate Meals</Button>
    </div>
  );
};

export default IngredientInput;
