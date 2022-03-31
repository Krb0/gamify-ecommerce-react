import { Flex, chakra } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import Buttons from "./Buttons";
import SearchBar from "./SearchBar";

const Navbar = () => {
  const { pathname } = useLocation();
  return (
    <Flex
      height="70px"
      padding={{ base: "1rem 1rem ", "2xl": "0.5rem 5rem" }}
      justifyContent="space-between"
      alignItems="center"
      flexWrap="wrap"
    >
      {pathname !== "/" ? <SearchBar /> : ""}
      <chakra.h1
        flex="1"
        fontWeight="700"
        fontSize="2rem"
        textAlign="left"
        color="black"
      >
        Gamify
      </chakra.h1>
      <Buttons />
    </Flex>
  );
};

export default Navbar;
