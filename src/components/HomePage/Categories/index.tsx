import { Flex } from "@chakra-ui/react";
import { categories as categoryList } from "../../../data";
import CategoryItem from "./CategoryItem";
const Categories = () => {
  return (
    <Flex padding="20px" justifyContent="space-between" flexWrap="wrap">
      {categoryList.map((category) => (
        <CategoryItem category={category} />
      ))}
    </Flex>
  );
};

export default Categories;
