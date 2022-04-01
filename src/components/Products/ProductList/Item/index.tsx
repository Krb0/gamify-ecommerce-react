import { Image, Stack, chakra } from "@chakra-ui/react";
import React from "react";
import { ProductType } from "../../../../products";

const Item = ({ item }: { item: ProductType }) => {
  return (
    <Stack
      maxWidth={{ base: "100vw", md: "350px" }}
      minWidth="350px"
      mt="3rem"
      flex="1"
    >
      <Image src={item.img} objectFit="contain" height="200px" />
      <chakra.span>{item.name} </chakra.span>
      <chakra.span>$ {item.price} </chakra.span>
    </Stack>
  );
};

export default Item;
