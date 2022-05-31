import React from 'react';
import { Routes, Route, BrowserRouter} from 'react-router-dom';
import {Navbar} from '../components/ui/Navbar'
import {HomeScreen} from '../components/home/HomeScreen';
import {LoginScreen} from '../components/login/LoginScreen';
import {MemoryScreen} from '../components/memory/MemoryScreen';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/memory" element={<MemoryScreen />} />
      </Routes>
    </BrowserRouter>
  )
};
