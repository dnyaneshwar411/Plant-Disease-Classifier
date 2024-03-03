import { Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Weather from './Pages/Weather';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Communities from './Pages/Communities';
import Shops from './Pages/Shops';
import Breadcrumb from './Components/Breadcrumb';
import Navbar from './Components/Navbar';
import Detection from './Pages/Detection';
import Blogs from './Pages/Blogs';
import { useState } from 'react';

export default function App() {
  return (
    <>
      <Navbar />
      <main className="padding-inline">
        <Breadcrumb />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plant-detection" element={<Detection />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Register />} />
          <Route path="/communities" element={<Communities />} />
          <Route path="/communities/:id" element={<Communities />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/shops" element={<Shops />} />
          <Route path="/shops/:shop" element={<Shops />} />
          <Route path="/*" element={"Page not found"} />
        </Routes>
      </main>
    </>
  )
}