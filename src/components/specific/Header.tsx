import React, { useState } from "react";
import Search from "./Search";

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <header className="sticky top-0 left-0 z-50 w-full flex flex-col items-center gap-4 bg-[#212731] px-4 py-4">
      <div className="w-full max-w-2xl flex items-center justify-between mx-auto">
        <div className="hidden sm:flex">
          <Search />
        </div>

        <nav className="flex items-center gap-4 text-xs sm:gap-6 sm:text-sm text-[#D1D6DA]">
          <span>Categories</span>
          <span>Website Builders</span>
          <span>Today's Deals</span>
        </nav>

        {/* mobile  */}
        <div
          className="sm:hidden cursor-pointer"
          onClick={() => setShowSearch(!showSearch)}>
          <img src="/images/search.png" alt="search" className="h-5" />
        </div>
      </div>
      {showSearch && (
        <div className="w-full sm:hidden">
          <Search />
        </div>
      )}
    </header>
  );
};

export default Header;
