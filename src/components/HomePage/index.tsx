import { Stack } from "@chakra-ui/react";
import Categories from "./Categories";
import Newsletter from "./Newsletter";
import Products from "./Products";
import Slider from "./Slider";

const Home = () => {
  return (
    <Stack>
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
    </Stack>
  );
};

export default Home;
