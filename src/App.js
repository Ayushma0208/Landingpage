import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import '../src/App.css';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import HomePage from './Homepage';
import ProductDetailPage from "./ProductDetailPage";
import ProductPage from "./ProductPage";
import ServicesPage from './ServicesPage';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav className="nav-bar">
            <li> Kanak Enterprises</li>
            <ul className="nav-links">
              <li><a href="/">Home</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="/product">Product</a></li>
            </ul>
          </nav>
          
        </header>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/product/:productId" element={<ProductDetailPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
