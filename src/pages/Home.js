import React from "react";
import Exercises from "../components/Exercises";
import HeroSection from "../components/HeroSection";
import SearchSection from "../components/SearchSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <SearchSection />
      <Exercises />
      <div className="min-h-[95vh]"></div>
    </div>
  );
};

export default Home;
