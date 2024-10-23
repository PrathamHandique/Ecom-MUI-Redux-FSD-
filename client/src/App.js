import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import ProductPage from './pages/productPage';
import CartPage from './pages/cartPage';
import AdminPage from './pages/adminPage';
import RegisterPage from './pages/registerPage';
import LoginPage from './pages/loginPage';
import AdminLoginPage from './pages/adminLoginPage';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/pol" element={<ProductPage />} />
        <Route path="/cartPage" element={<CartPage />} />
        <Route path="/adminPage" element={<AdminPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/adminLoginPage" element={<AdminLoginPage />} />
      </Routes>
    </Router>
  );
};

export default App;
