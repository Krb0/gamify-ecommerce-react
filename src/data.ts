export interface SliderItemsType {
  id: number;
  title: string;
  description: string;
  img: string;
  bg: string;
  textColor: string;
}

export const sliderItems: SliderItemsType[] = [
  {
    id: 1,
    img: "https://i.ibb.co/DG69bQ4/2.png",
    title: "SUMMER SALE",
    description:
      "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
    bg: "#f5fafd",
    textColor: "coral",
  },
  {
    id: 2,
    img: "https://i.ibb.co/cXFnLLV/3.png",
    title: "AUTUMN COLLECTION",
    description:
      "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
    bg: "#fcf1ed",
    textColor: "rgba(0,0,250,.6)",
  },
  {
    id: 3,
    img: "https://freepngimg.com/thumb/dress/176131-girl-dress-long-free-transparent-image-hq.png",
    title: "JADE COLLECTION",
    description:
      "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
    bg: "#f5fafd",
    textColor: "rgba(0,80,0,.6)",
  },
];
