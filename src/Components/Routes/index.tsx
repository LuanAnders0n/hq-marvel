import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../../Pages/Home';
import Hq from '../../Pages/Hq';
import Shopping from '../../Pages/Shopping';

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="comic/:id" element={<Hq />} />
      <Route path="shopping" element={<Shopping />} />
    </Routes>
  );
};

export default RoutesComponent;
