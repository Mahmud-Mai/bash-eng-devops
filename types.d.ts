export type IntroCardProps = {
  id?: number;
  icon: String;
  stepCount: String;
  title: String;
  content: String;
};

export type ProductCardProps = {
  id?: number;
  category: String;
  heading: String;
  user: String;
  location: String;
  time: String;
  imgSrc: String | StaticImport;
  units: string;
  price: number;
};
