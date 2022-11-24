import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ExerciseDetail from "./pages/ExerciseDetail";

const App = () => {
  return (
    <div className="bg-black">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exerxise/:id" element={<ExerciseDetail />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
