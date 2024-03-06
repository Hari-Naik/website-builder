import React from "react";

const RelatedDealsItem = () => {
  return (
    <div className="p-4 h-max w-max rounded mx-auto sm:mx-0">
      <div className="w-full flex items-center justify-center">
        <img src="/images/builder.png" alt="web-builder" className="h-20" />
      </div>
      <div className="mt-4 flex flex-col gap-2">
        <div className="flex items-center gap-1">
          <div className="bg-[#F2F4F7] rounded p-1 text-xs text-[#074786]">
            20% Off
          </div>
          <div className="bg-[#F2F4F7] rounded p-1 text-xs text-[#074786]">
            Limited time
          </div>
        </div>
        <h3 className="text-xs text-[#626E79] font-semibold text-center">
          Webbuilder 1
        </h3>
        <p className="text-xs text-[#626E79]">
          Computer Modern classic with wix support
        </p>
        <div className="flex items-center gap-2">
          <span className="text-sm text-[#626E79] font-semibold">$39.96</span>
          <span className="text-[10px] text-[#9FA9B3]">$49.96</span>
          <span className="text-[10px] text-[#EF4C5D]">(20% Off)</span>
        </div>
        <button className="w-full py-2 rounded bg-[#1B88F4] text-white text-xs">
          View Deal
        </button>
      </div>
    </div>
  );
};

export default RelatedDealsItem;
