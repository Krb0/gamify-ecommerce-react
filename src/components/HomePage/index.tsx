import { Stack } from "@chakra-ui/react";
import Categories from "./Categories";
import Products from "./Products";
import Slider from "./Slider";

const Home = () => {
  return (
    <Stack>
      <Slider />
      <Categories />
      <Products />
    </Stack>
  );
};

export default Home;
