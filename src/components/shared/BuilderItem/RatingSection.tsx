import React from "react";

type Props = {
  vote_average: number;
  label: string;
};

const RatingSection: React.FC<Props> = ({ vote_average, label }) => {
  return (
    <div className="flex-1 flex flex-col justify-between items-center ">
      <div className="w-max h-max flex flex-col items-center justify-center bg-[#F3F9FF] rounded-md p-4">
        <span className="text-lg text-[#074786] font-semibold">
          {vote_average}
        </span>
        <span className="text-[10px] text-[#074786]">{label}</span>
        {label === "Exceptional" && (
          <img
            src="/images/5-star-rating.png"
            alt="rating"
            className="w-10 mt-2"
          />
        )}
        {label === "Very Good" && (
          <img
            src="/images/4-star-rating.png"
            alt="rating"
            className="w-10 mt-2"
          />
        )}
        {label === "Excellent" && (
          <img
            src="/images/4.5-star-rating.png"
            alt="rating"
            className="w-10 mt-2"
          />
        )}
      </div>
      <button className="w-[90%] bg-[#1B88F4] text-white text-sm py-2 rounded-md">
        View
      </button>
    </div>
  );
};

export default RatingSection;
