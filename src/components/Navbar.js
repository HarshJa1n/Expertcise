import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <nav className="top-0 bg-neutral-900 sticky z-100000 w-full flex flex-wrap items-center justify-between ">
      <div className="container  px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <a
            className="text-2xl lg:text-4xl font-ruglitch leading-relaxed inline-block mr-4 py-4 whitespace-no-wrap uppercase text-white"
            href="/"
          >
            Ex<span className="text-gray-400">p</span>er
            <span className="text-gray-400">t</span>cise
          </a>
          <button
            className={
              "text-white cursor-pointer text-xl flex  items-center my-auto md:hidden outline-none focus:outline-none"
            }
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <i className={"fas fa-bars" + (navbarOpen ? " hidden" : " ")}></i>
            <i
              className={"fa-solid fa-xmark" + (navbarOpen ? "" : " hidden ")}
            ></i>
          </button>
        </div>
        <div
          className={
            "md:flex flex-grow items-center justify-center " +
            (navbarOpen ? " flex" : " hidden")
          }
        >
          <ul className="flex w-full flex-col items-center md:flex-row text-white list-none lg:ml-auto justify-end ">
            <li className="  rounded-md my-2 lg:my-0 lg:p-2 lg:px-4 justify-center w-full md:w-auto bg-red-800 lg:mx-4 flex text-lg hover:text-slate-200 transition-all duration-300">
              <Link to="/">
                <i className="fas fa-home mt-1 mr-2"></i>Home
              </Link>
            </li>
            <li className=" rounded-md mb-2 lg:mb-0 lg:p-2 justify-center w-full md:w-auto bg-red-800 lg:mx-4 flex text-lg hover:text-slate-200 transition-all duration-300 ">
              <Link to="#exercises">
                <i className="fas fa-dumbbell mt-1 mr-2"></i> Exercises
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
