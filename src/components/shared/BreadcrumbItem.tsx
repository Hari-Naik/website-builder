import React from "react";

type Props = {
  title: string;
};

const BreadcrumbItem: React.FC<Props> = ({ title }) => {
  return (
    <div className="flex items-center gap-1">
      <span>{title}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="w-4 h-4 -mb-[2px]">
        <path
          fillRule="evenodd"
          d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
};

export default BreadcrumbItem;
