import React, { lazy, Suspense } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Main from './component/Main';
import AllItems from './Pages/AllItems';
import Php from './Pages/Php';
import NavItem2 from './Pages/NavItem2';
import NavItem3 from './Pages/NavItem3';
import NavItem4 from './Pages/NavItem4';
import NavItem5 from './Pages/NavItem5';
import Register from './Pages/Register';
import Login from './Pages/Login';

import ProtectedRoute from './ProtectedRoute/ProtectedRoute';
import useAuth from './ProtectedRoute/useAuth';
import ProductDetails from '../src/component/ProductDetails';

// Lazy load Profile component
const Profile = lazy(() => import('./Pages/Profile'));

function App() {
  const [isAuth, login, logout] = useAuth(false);

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Main />} />
          <Route path="/register" element={<Register />} />
          
          {/* Lazy loaded Profile component */}
          <Route path="/profile" element={<Suspense fallback={<div>Loading...</div>}><Profile/></Suspense>} />

          <Route path="/php" element={<Php />} />
          <Route path="/css" element={<NavItem2 />} />
          <Route path="/javascript" element={<NavItem3 />} />
          <Route path="/all items" element={<AllItems />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          
          {/* Protected Routes */}
          <Route path="/html" element={<ProtectedRoute Component={NavItem4} />} />
          <Route path="/react" element={<ProtectedRoute Component={NavItem5} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
