import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Signup from './auth/Signup';
import Signin from './auth/Signin';

const StartingRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<App />} />
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/signin" exact element={<Signin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default StartingRoutes;

/**
 * - In react-router-dom v6, "<Switch></Switch>" component is replaced by routes "<Routes></Routes>" component
 * - StartingRoutes is a component
 * - By using React Router's exact prop on the first route, you can ensure that the route will match only 
 *   if the current URL is an exact match.
 * 
 * 
 */