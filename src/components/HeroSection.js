import React from "react";

const HeroSection = () => {
  return (
    <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-[95vh]">
      <div className="absolute top-0 w-full h-full bg-top bg-cover bg-[url('https://api.time.com/wp-content/uploads/2017/01/men-muscular-obsessed.jpg')]">
        <span
          id="blackOverlay"
          className="w-full h-full absolute opacity-50 bg-black"
        ></span>
      </div>
      <div className="container relative mx-auto">
        <div className="items-center flex flex-wrap">
          <div className="w-full lg:w-7/12 px-4 ml-auto mr-auto text-center">
            <div>
              <h1 className="text-white font-semibold text-5xl">
                Become the Expert of your{" "}
                <span className="text-red-600">Exercise</span>
              </h1>
              <p className="mt-4 text-lg text-gray-300">
                Find the most effective exercise based on Duis elementum auctor
                accumsan. Aliquam in felis sit amet augue consectetur mollis sit
                amet sed diam.
              </p>
              <a
                href="#exercises"
                className="bg-transparent text-xl hover:bg-red-600 text-red-600 font-semibold hover:text-white p-4 border border-red-600 hover:border-transparent rounded-full inline-block mt-5 cursor-pointer"
              >
                Explore Exercises
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
