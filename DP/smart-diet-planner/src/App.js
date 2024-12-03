// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import ProfileForm from './components/ProfileForm';
import IngredientInput from './components/IngredientInput';
import MealPlan from './components/MealPlan';
import GroceryList from './components/GroceryList';
import AIChatbot from './components/AIChatbot';
import ProgressTracker from './components/ProgressTracker';
import AdminDashboard from './components/AdminDashboard';
import SignUp from './components/SignUp';
import Login from './components/Login';
import NutritionForm from './components/NutritionForm';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/profile" element={<ProfileForm />} />
        <Route path="/ingredients" element={<IngredientInput />} />
        <Route path="/meal-plan" element={<MealPlan />} />
        <Route path="/grocery-list" element={<GroceryList />} />
        <Route path="/chatbot" element={<AIChatbot />} />
        <Route path="/progress" element={<ProgressTracker />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/nutrition" element={<NutritionForm />} />
      </Routes>
    </Router>
  );
};

export default App;
