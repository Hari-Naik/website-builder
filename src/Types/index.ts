export type BuilderItemType = {
  id: number;
  img: string;
  title: string;
  descrpition: string;
  mainHighlight: string;
  highlists: {
    id: number;
    text: string;
  }[];
  extraInfo: string[];
  rating: {
    vote_average: number;
    label: string;
  };
  isBestChoice: boolean;
  isBestValue: boolean;
  discount: string;
};
