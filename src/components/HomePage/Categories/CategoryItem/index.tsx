import { Box, Image, chakra, Stack, Button } from "@chakra-ui/react";
import { CategoryType } from "../../../../data";

const CategoryItem = ({ category }: { category: CategoryType }) => {
  return (
    <Box
      flex="1"
      margin="3px"
      height="70vh"
      position="relative"
      minWidth="200px"
    >
      <Image src={category.img} width="100%" objectFit="cover" height="100%" />
      <CategoryContent category={category} />
    </Box>
  );
};

export default CategoryItem;

const CategoryContent = ({ category }: { category: CategoryType }) => {
  return (
    <Stack
      position="absolute"
      width="100%"
      height="100%"
      top="0"
      alignItems="center"
      justifyContent="center"
      color="white"
      bgColor="rgba(0,0,0,0.6)"
    >
      <chakra.h3
        fontSize={{ base: "1.2rem", xl: "2.75rem" }}
        fontWeight="bold"
        textAlign="center"
        mb="1rem"
      >
        {category.title}
      </chakra.h3>
      <Button
        color="#444"
        bgColor="white"
        borderRadius="1px"
        _focus={{ outline: "none" }}
        transition="all 0.25s "
        _hover={{
          opacity: "0.95",
          color: "white",
          bgColor: "#444",
          borderRadius: "3px",
        }}
      >
        SHOP NOW
      </Button>
    </Stack>
  );
};
