import { Stack, chakra } from "@chakra-ui/react";
import Categories from "./Categories";
import Newsletter from "./Newsletter";
import Products from "./Products";
import Slider from "./Slider";

const Home = () => {
  return (
    <Stack>
      <Slider />
      <Categories />
      <chakra.span
        mt="1.5rem !important"
        fontWeight="bold"
        fontSize="2rem"
        width="full"
        textAlign="center"
      >
        Featured
      </chakra.span>
      <Products />
      <Newsletter />
    </Stack>
  );
};

export default Home;
