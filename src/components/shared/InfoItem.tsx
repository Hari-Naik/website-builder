import React from "react";

type Props = {
  iconSrc: string;
  text: string;
  order?: number;
};

const InfoItem: React.FC<Props> = ({ iconSrc, text, order }) => (
  <div className={`flex items-center gap-2 ${order && "sm:ml-auto"}`}>
    <img src={iconSrc} alt="icon" className={`h-4 ${order && "order-2"}`} />
    <span className="text-xs text-[#4B5665]">{text}</span>
  </div>
);

export default InfoItem;
