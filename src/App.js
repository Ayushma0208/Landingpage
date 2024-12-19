import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import '../src/App.css';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import HomePage from './Homepage';
import NewsEvents from './NewsEvents';
import ServicesPage from './ServicesPage';
import VentureList from './VentureList';
import WhatsAppButton from "./WhatsAppButton";
function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="/ventures">Ventures</a></li>
              <li><a href="/news">News & Events</a></li>
            </ul>
          </nav>
          <h1>Kanak Enterprises</h1>
      <WhatsAppButton />
        </header>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/ventures" element={<VentureList />} />
          <Route path="/news" element={<NewsEvents />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
