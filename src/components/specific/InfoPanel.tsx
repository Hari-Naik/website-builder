import React from "react";
import BreadcrumbItem from "../shared/BreadcrumbItem";
import InfoItem from "../shared/InfoItem";

const InfoPanel = () => {
  return (
    <div className="w-full">
      <h1 className="text-2xl sm:text-4xl font-semibold text-[#2C384A] mb-2 shadow-gray-500  drop-shadow-lg">
        Best Website builders in the US
      </h1>
      <div className="w-full flex items-center gap-4 flex-wrap border-y border-gray-200 py-2">
        <InfoItem
          iconSrc="/images/last-updated.png"
          text="Last Updated - March 05, 2024"
        />
        <InfoItem
          iconSrc="/images/advertising.png"
          text="Advertising Disclosure"
        />
        <InfoItem
          iconSrc="/images/arrow-down.png"
          text="Top Relevant"
          order={2}
        />
      </div>

      <div className="max-w-2xl grid grid-cols-3 sm:grid-cols-6 gap-4  py-4 text-xs text-[#4B5665]">
        <span>Tools</span>
        <span>Aws Builder</span>
        <span> Start Build</span>
        <span>Build Supplies</span>
        <span>Tooling</span>
        <span>BlueHosting</span>
      </div>

      <div className="hidden sm:flex items-center gap-1 text-sm text-[#4B5665]">
        <BreadcrumbItem title="Home" />
        <BreadcrumbItem title="Hosting for all" />
        <BreadcrumbItem title="Hosting" />
        <BreadcrumbItem title="Hosting5" />
        <span>Hosting6</span>
      </div>
    </div>
  );
};

export default InfoPanel;
