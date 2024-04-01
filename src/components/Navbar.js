import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between m-5">
        <div className="flex space-x-2 justify-center items-center">
          <img className="w-8 h-8" src="./b.png" alt="" />
          <div className="text-2xl font-bold">Project Dashboard</div>
        </div>

        <div className="flex space-x-2 w-1/3 items-center">
          <form class="max-w-lg w-3/5 mx-auto">
            <label
              for="default-search"
              class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                class="block w-full p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search my storyboards"
                required
              />
            </div>
          </form>
          <button className="max-w-lg border-2 font-bold text-sm  border-blue-200 bg-blue-100 space-x-2 p-3 rounded-md flex items-center">
            <img src="./load.jpg" className="w-5" alt="" />
            <div className="">Quick Start</div>
          </button>
          <div className="cursor-pointer border-2 rounded-full p-2 h-10 w-10 text-center bg-orange-200 border-black font-bold">
            A
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
