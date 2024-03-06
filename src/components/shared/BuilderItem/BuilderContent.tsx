import React, { useState } from "react";
import { BuilderItemType } from "../../../Types";

type Props = {
  builder: BuilderItemType;
};

const BuilderContent: React.FC<Props> = ({ builder }) => {
  const [showmore, setShowMore] = useState(false);
  const toggelShowmore = () => {
    setShowMore(prev => !prev);
  };
  return (
    <div className="w-[70%] flex flex-col gap-2">
      <p className="text-xs">
        <span className="font-semibold">{builder.title}</span>-{" "}
        {builder.descrpition}.
      </p>

      <div className="bg-[#F2F4F7] w-max rounded p-1 text-xs text-[#074786]">
        {builder.discount}
      </div>

      <MainHighlights
        mainHighlight={builder.mainHighlight}
        highlights={builder.highlists}
        showmore={showmore}
      />

      {showmore && <WhyWeLoveIt extraInfo={builder.extraInfo} />}

      <button
        onClick={toggelShowmore}
        className="w-max flex items-center text-xs text-[#1B88F4] outline-none border-none mt-2">
        {showmore ? "Show less" : "Show more"}

        <img
          src="/images/arrow-down.png"
          alt="arrow-down"
          className={`h-3 ${showmore && "rotate-180"}`}
        />
      </button>
    </div>
  );
};

const HighlightItem = ({ id, text }: { id: number; text: string }) => (
  <div className="flex items-center gap-1">
    <p className="bg-white px-2 py-[1px] rounded text-xs text-[#1B88F4]">
      {id}
    </p>
    <p>{text}</p>
  </div>
);

const ExtraInfoItem = ({ text }: { text: string }) => (
  <div className="flex items-center gap-1">
    <img src="/images/last-updated.png" alt="" className="h-3" />
    <span>{text}</span>
  </div>
);

const MainHighlights = ({
  mainHighlight,
  highlights,
  showmore,
}: {
  mainHighlight: string;
  highlights: { id: number; text: string }[];
  showmore: boolean;
}) => (
  <div className="text-xs">
    <h3 className="font-semibold">Main highlights</h3>
    <p className="m-2">[What You Get]: {mainHighlight}</p>

    {showmore && (
      <div className="bg-[#FFF4ED] flex flex-col gap-1 rounded-md p-2 mx-2">
        {highlights.map(item => (
          <HighlightItem key={item.id} id={item.id} text={item.text} />
        ))}
      </div>
    )}
  </div>
);

const WhyWeLoveIt = ({ extraInfo }: { extraInfo: string[] }) => (
  <div className="flex flex-col gap-2 mt-3 text-xs">
    <h3>Why we love it</h3>
    {extraInfo.map(text => (
      <ExtraInfoItem key={text} text={text} />
    ))}
  </div>
);

export default BuilderContent;
