import React, {  } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import '../src/App.css';
import HomePage from './Homepage';
import ServicesPage from './ServicesPage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import VentureList from './VentureList';
import NewsEvents from './NewsEvents';
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
          <h1>Welcome to My Website</h1>
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
