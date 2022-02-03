import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../views/home";
import Login from "../views/login";

const ViewRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Login register />} />
      </Routes>
    </Router>
  );
};

export default ViewRoutes;
