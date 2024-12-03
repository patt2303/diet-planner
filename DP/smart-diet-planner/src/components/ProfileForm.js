import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';  // Import useNavigate from react-router-dom
import '../App.css';

const ProfileForm = () => {
  const navigate = useNavigate();  // Use useNavigate hook for navigation
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    height: '',
    weight: '',
    preferences: {
      vegetarian: false,
      vegan: false,
      keto: false,
      paleo: false,
      glutenFree: false,
      dairyFree: false,
    },
    fitnessGoal: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData({
        ...formData,
        preferences: {
          ...formData.preferences,
          [name]: checked,
        },
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Use navigate to redirect to the ingredients input page
    navigate('/ingredients');  // Replacing history.push() with navigate()
  };

  return (
    <div className="container">
      <h2>Create Your Profile</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Age</Form.Label>
          <Form.Control
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Gender</Form.Label>
          <Form.Control
            as="select"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option>Choose...</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Height (cm)</Form.Label>
          <Form.Control
            type="number"
            name="height"
            value={formData.height}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Weight (kg)</Form.Label>
          <Form.Control
            type="number"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="form-group">
  <Form.Label className="form-label">Dietary Preferences</Form.Label>
  <div className="checkbox-group">
    <Form.Check
      type="checkbox"
      name="vegetarian"
      label="Vegetarian"
      checked={formData.preferences.vegetarian}
      onChange={handleChange}
      className="checkbox-item"
    />
    <Form.Check
      type="checkbox"
      name="vegan"
      label="Vegan"
      checked={formData.preferences.vegan}
      onChange={handleChange}
      className="checkbox-item"
    />
    <Form.Check
      type="checkbox"
      name="keto"
      label="Keto"
      checked={formData.preferences.keto}
      onChange={handleChange}
      className="checkbox-item"
    />
    <Form.Check
      type="checkbox"
      name="glutenFree"
      label="Gluten-Free"
      checked={formData.preferences.glutenFree}
      onChange={handleChange}
      className="checkbox-item"
    />
    <Form.Check
      type="checkbox"
      name="dairyFree"
      label="Dairy-Free"
      checked={formData.preferences.dairyFree}
      onChange={handleChange}
      className="checkbox-item"
    />
  </div>
</Form.Group>

        <Form.Group>
          <Form.Label>Fitness Goal</Form.Label>
          <Form.Control
            as="select"
            name="fitnessGoal"
            value={formData.fitnessGoal}
            onChange={handleChange}
            required
          >
            <option>Choose...</option>
            <option>Lose Weight</option>
            <option>Gain Muscle</option>
            <option>Maintain</option>
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">Next: Ingredients on Hand</Button>
      </Form>
    </div>
  );
};

export default ProfileForm;

