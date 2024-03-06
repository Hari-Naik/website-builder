import React from "react";
import BuilderItemImg from "./BuilderItemImg";
import { BuilderItemType } from "../../../Types";
import RatingSection from "./RatingSection";
import BuilderContent from "./BuilderContent";

type Props = {
  builder: BuilderItemType;
};

const BuilderItem: React.FC<Props> = ({ builder }) => {
  return (
    <div className="w-full h-max flex flex-col gap-6 md:flex-row mt-10">
      <BuilderItemImg id={builder.id} />
      <div className="flex justify-between">
        <BuilderContent builder={builder} />
        <RatingSection
          vote_average={builder.rating.vote_average}
          label={builder.rating.label}
        />
      </div>
    </div>
  );
};

export default BuilderItem;
