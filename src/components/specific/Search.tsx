import React from "react";

const Search = () => {
  return (
    <div className="flex items-center w-full sm:max-w-[258px] h-[32px] bg-white rounded px-2">
      <img src="/images/search.png" alt="search" className="h-4" />

      <input
        type="text"
        className="w-full h-full rounded border-none outline-none pl-2"
      />
    </div>
  );
};

export default Search;
