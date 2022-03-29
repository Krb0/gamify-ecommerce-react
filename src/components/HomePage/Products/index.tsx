import { Flex } from "@chakra-ui/react";
import { popularProducts } from "../../../data";
import Product from "./Product";

const Products = () => {
  return (
    <Flex padding="20px" flexWrap="wrap" justifyContent="space-between">
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Flex>
  );
};

export default Products;
