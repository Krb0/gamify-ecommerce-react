import { Flex } from "@chakra-ui/react";
import { useState } from "react";
import productsArr from "../../../products";
import Item from "./Item";

const ProductList = () => {
  const [products] = useState(productsArr.sort(() => 0.5 - Math.random()));
  return (
    <Flex flexWrap="wrap" justifyContent="space-between">
      {products.map((item) => (
        <Item item={item} />
      ))}
    </Flex>
  );
};

export default ProductList;
