import React from "react";
import RelatedDealsItem from "../shared/RelatedDealsItem";

const ReleatedDeals = () => {
  return (
    <div className="mt-10">
      <h1 className="text-xl text-[#2C384A] mb-6 text-center sm:text-start">
        Related deals you might like for
      </h1>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        <RelatedDealsItem />
        <RelatedDealsItem />
        <RelatedDealsItem />
      </div>
    </div>
  );
};

export default ReleatedDeals;
