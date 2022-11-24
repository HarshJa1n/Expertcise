import React, { useEffect, useState } from "react";
import { exerciseOptions, fetchData } from "../functions/fetchData";
import HorizontalScroll from "./HorizontalScroll";

const SearchSection = ({ setExercises, bodyPart, setBodyPart }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );

      setBodyParts(["all", ...bodyPartsData]);
    };
    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (searchTerm) {
      console.log("yes search term ");
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );

      const filteredExercises = exercisesData.filter((exercise) => {
        return (
          exercise.name.toLowerCase().includes(searchTerm) ||
          exercise.target.toLowerCase().includes(searchTerm) ||
          exercise.equipment.toLowerCase().includes(searchTerm) ||
          exercise.bodyPart.toLowerCase().includes(searchTerm)
        );
      });

      setSearchTerm("");
      setExercises(filteredExercises);
    }
  };

  return (
    <div className="flex flex-col mt-2 md:mt-4 items-center justify-center bg-black">
      <div className="flex flex-col font-cursive justify-center items-center text-xl md:text-4xl my-2">
        Search whatever you like,
        <br /> <span className="flex">whatever you'll do</span>
      </div>
      <div className="px-4 flex w-full space-x-1 mt-2">
        <input
          type="text"
          className="block w-full px-4 py-2 text-red-600 bg-white border rounded-full focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value.toLowerCase());
          }}
          placeholder="Search..."
        />
        <button
          className="px-4 text-white bg-red-600 rounded-full "
          onClick={handleSearch}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
      <div className=" relative w-full p-2 ">
        <HorizontalScroll
          data={bodyParts}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        />
      </div>
    </div>
  );
};

export default SearchSection;
