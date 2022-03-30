import { Box, Flex, Image } from "@chakra-ui/react";
import { popularProductType } from "../../../../data";
import Buttons from "./Buttons";

const Product = ({ item }: { item: popularProductType }) => {
  return (
    <Flex
      flex="1"
      margin="5px"
      minWidth="280px"
      height="350px"
      alignItems="center"
      justifyContent="center"
      bgColor="#f5fbfd"
      position="relative"
      role={"group"}
    >
      <Box
        width="170px"
        height="170px"
        zIndex="1"
        position="absolute"
        borderRadius="50%"
        bgColor="rgba(0,100,0,0.1)"
      />
      <Image src={item.img} height="95%" zIndex="2" />
      <Buttons />
    </Flex>
  );
};

export default Product;
