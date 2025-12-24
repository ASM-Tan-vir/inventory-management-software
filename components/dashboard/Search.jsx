import { SearchIcon } from "lucide-react";
import React from "react";

export default function Search() {
  return (
    <form>
      <label htmlFor="simple-search" className="sr-only">
        Search
      </label>

      <div className="relative w-full">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <SearchIcon className="w-4 h-4 text-gray-500" />
        </div>

        <input
          type="text"
          id="simple-search"
          className="
            bg-white 
            border border-gray-300 
            text-gray-900 text-sm rounded-lg 
            block w-full ps-10 px-2 py-1.5
            focus:outline-none
            focus:border-blue-500
            focus:ring-1
            focus:ring-blue-900
          "
          placeholder="Search in customers  { / }"
        />
      </div>
    </form>
  );
}
