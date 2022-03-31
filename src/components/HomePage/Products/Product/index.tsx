import { Box, Flex, Image } from "@chakra-ui/react";
import { popularProductType } from "../../../../data";
import Buttons from "./Buttons";

const Product = ({ item }: { item: popularProductType }) => {
  return (
    <Flex
      flex="1"
      margin="5px"
      minWidth={{ base: "90vw", xs: "280px" }}
      height="350px"
      alignItems="center"
      justifyContent="center"
      bgGradient="linear-gradient(155deg, rgba(122,36,175,0.8) 34%, rgba(85,36,175,0.8) 70%)"
      position="relative"
      role={"group"}
    >
      <Box
        width="170px"
        height="170px"
        zIndex="1"
        position="absolute"
        borderRadius="50%"
      />
      <Image src={item.img} height="95%" zIndex="2" objectFit="contain" />
      <Buttons />
    </Flex>
  );
};

export default Product;
