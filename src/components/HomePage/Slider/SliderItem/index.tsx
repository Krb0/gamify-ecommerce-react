import { Flex, Image } from "@chakra-ui/react";
import { SliderItemsType } from "../../../../data";
import SliderInfo from "./SliderInfo";

const SliderItem = ({
  item,
  slideIndex,
}: {
  item: SliderItemsType;
  slideIndex: number;
}) => {
  return (
    <Flex
      height="100%"
      width="100vw"
      alignItems="center"
      justifyContent="center"
      bgColor={item.bg}
      mx="auto"
      transition="1s 0.1s "
      animation="transform"
      transform={`translateX(${slideIndex * -100}vw ) `}
    >
      <Image
        src={item.img}
        height="80%"
        width={{ base: "200px", xl: "auto" }}
        objectFit={{ base: "cover", xl: "contain" }}
        objectPosition={item.objectPos}
        flex={{ base: "1", xl: "1" }}
      />
      <SliderInfo item={item} />
    </Flex>
  );
};

export default SliderItem;
