import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import App from "../components/App"; // Import your home component
import Intro from "../components/intro";
import Admin from "../components/admin"; // Import your admin component

const AppRouter = () => {
  return (
<<<<<<< HEAD
    <Router basename="/catherine-recruiting">
=======
    <Router>
>>>>>>> 74beae702ae67f9be060a946353f15387a6e8da3
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
