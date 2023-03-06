export type Data = {
  status: boolean;
  totalCount: number;
  data: ProDucts[];
  message?: string;
};

export type Img = {
  src: string;
  dataAltImage: string;
  alt: string;
  dataAltText: string;
};
export type Swatches = {
  colorCode: string;
  articleLink: string;
  colorName: string;
};
export type ProDucts = {
  _id?: string;
  articleCode: string;
  link: string;
  title: string;
  category: string;
  image: Img[];
  favouritesTracking: string;
  favouritesSavedText: string;
  favouritesNotSavedText: string;
  price: number;
  sellingAttribute: string;
  swatchesTotal: string;
  swatches: Swatches[];
  brandName: string;
  outOfStockText: string;
  comingSoon: string;
  redPrice: string;
};

export type DataPayload = {
  data: ProDucts[];
  status: string;
  totalCount: number;
};

export type ActionPayload = {
  type: string;
  payload: DataPayload;
};
