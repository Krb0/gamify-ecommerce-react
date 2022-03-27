import { useState } from "react";
import { Flex } from "@chakra-ui/react";
import { sliderItems } from "../../../data";
import SliderItem from "./SliderItem";
import Arrow from "./Arrow";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState<number>(0);

  return (
    <Flex width="full" h="100vh" position="relative" overflow="hidden">
      <Arrow setSlideIndex={setSlideIndex} direction="left" />
      <Flex height="100vh">
        {sliderItems.map((item) => (
          <SliderItem item={item} slideIndex={slideIndex} key={item.id} />
        ))}
      </Flex>
      <Arrow setSlideIndex={setSlideIndex} direction="right" />
    </Flex>
  );
};

export default Slider;
