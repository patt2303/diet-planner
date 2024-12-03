// src/components/LandingPage.js
import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="container text-center">
      <h1>Smart Personal Diet Planner</h1>
      <p>Welcome to your personalized diet planner! Enter your dietary preferences, track your meals, and achieve your fitness goals with ease.</p>
      <div>
        <Link to="/signup">
          <Button variant="primary">Sign Up</Button>
        </Link>
        <Link to="/login">
          <Button variant="secondary" className="ml-2">Log In</Button>
        </Link>
      </div>
      <div className="mt-4">
        <Link to="/profile">
          <Button variant="success">Get Started</Button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
