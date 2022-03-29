export interface SliderItemsType {
  id: number;
  title: string;
  description: string;
  img: string;
  bg: string;
  textColor: string;
  objectPos: string;
}
export interface CategoryType {
  id: number;
  img: string;
  title: string;
}

export const sliderItems: SliderItemsType[] = [
  {
    id: 1,
    img: "https://i.ibb.co/DG69bQ4/2.png",
    title: "SUMMER SALE",
    description:
      "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
    bg: "#f5fafd",
    objectPos: "left",
    textColor: "coral",
  },
  {
    id: 2,
    img: "https://i.ibb.co/cXFnLLV/3.png",
    title: "AUTUMN COLLECTION",
    description:
      "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
    bg: "#fcf1ed",
    objectPos: "center",
    textColor: "rgba(0,0,250,.6)",
  },
  {
    id: 3,
    img: "https://ae01.alicdn.com/kf/H8e8de61600e446f38aad9508b136a755L/High-Quality-Formal-Blazer-Woman-Dress-Suit-Set-4XL-Plus-Size-Full-Sleeve-White-Jacket-black.jpg_Q90.jpg_.webp",
    title: "JADE COLLECTION",
    description:
      "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
    bg: "#f5fafd",
    objectPos: "center",
    textColor: "rgba(0,80,0,.6)",
  },
];

export const categories = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/5886041/pexels-photo-5886041.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    title: "SHIRT STYLE!",
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    title: "LOUNGEWEAR LOVE",
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/5480696/pexels-photo-5480696.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    title: "LIGHT JACKETS",
  },
];

export interface popularProductType {
  id: number;
  img: string;
}
export const popularProducts: popularProductType[] = [
  {
    id: 1,
    img: "https://i.ibb.co/QmDRgWH/M78101s3-removebg-preview.png",
  },
  {
    id: 2,
    img: "https://i.ibb.co/TKvb50G/T22-442s5-removebg-preview.png",
  },
  {
    id: 3,
    img: "https://i.ibb.co/yRFTCC7/T09909s4-removebg-preview.png",
  },
  {
    id: 4,
    img: "https://i.ibb.co/y65KMRY/T30548s-removebg-preview.png",
  },
  {
    id: 5,
    img: "https://i.ibb.co/txX73WK/479847s4-removebg-preview.png",
  },
  {
    id: 6,
    img: "https://i.ibb.co/zb9FL52/M72-033s4-removebg-preview.png",
  },
  {
    id: 7,
    img: "https://i.ibb.co/9hfd1rm/M58-748s5-removebg-preview.png",
  },
  {
    id: 8,
    img: "https://i.ibb.co/t8mXB98/760741s5-removebg-preview.png",
  },
  {
    id: 9,
    img: "https://i.ibb.co/xSy1h9B/M73-938s-removebg-preview.png",
  },
];
