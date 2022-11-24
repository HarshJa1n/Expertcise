import React, { useState } from "react";
import Exercises from "../components/Exercises";
import HeroSection from "../components/HeroSection";
import SearchSection from "../components/SearchSection";

const Home = () => {
  const [bodyPart, setBodyPart] = useState("all");
  const [exercises, setExercises] = useState([]);
  return (
    <div>
      <HeroSection />
      <SearchSection
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <div className="min-h-[95vh]"></div>
    </div>
  );
};

export default Home;
