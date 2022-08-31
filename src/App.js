import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Nav, Home, About, Footer } from "./components/All_Files";
import "./css/App.css";

export default function App() {
  return (
    <div className="app">
      <Router>
        <Nav />
        <Routes>
          <Route path="/portfolio" element={<Home />}></Route>
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>

      <Footer />
    </div>
  );
}
