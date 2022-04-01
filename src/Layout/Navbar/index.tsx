import { Flex, chakra, Link } from "@chakra-ui/react";
import { useLocation, Link as RouterLink } from "react-router-dom";
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
      <Link as={RouterLink} to="/" flex="1">
        <chakra.h1
          fontWeight="700"
          fontSize="2rem"
          textAlign="left"
          color="black"
        >
          Gamify
        </chakra.h1>
      </Link>
      {pathname !== "/" ? <SearchBar /> : ""}
      <Buttons />
    </Flex>
  );
};

export default Navbar;
