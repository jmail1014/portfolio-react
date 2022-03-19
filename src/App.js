import React from "react";
import { ReactDOM } from "react";
import { Router, Routes, Route } from "react-router-dom";
import "./App.css";
import {
  About,
  Contact,
  // Footer,
  // Header,
  // Modal,
  Nav,
  // Project,
  // Resume,
} from "./components";

function App() {
  ReactDOM.render(
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Contact />} />
      </Routes>
    </Router>,
    document.getElementById("root")
  );
}

export default App;
