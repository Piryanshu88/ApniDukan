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

export type User = {
  _id?: string;
  firstName?: string;
  lastName?: string;
  email: string;
  gender?: string;
  password: string;
};
export type UserPayload = {
  message: string;
  token?: string;
  status: string;
  data?: User;
};

export type UserAction = {
  type: string;
  payload: UserPayload;
};
