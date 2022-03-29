import { Flex, chakra, Input } from "@chakra-ui/react";
import { Search } from "@material-ui/icons";

const SearchBar = () => {
  return (
    <Flex flex="1" alignItems="center">
      <chakra.span fontSize="14px" cursor="pointer">
        EN
      </chakra.span>
      <Flex
        border="1px solid lightgray"
        borderRadius="3x"
        alignItems="center"
        marginLeft="25px"
      >
        <Input border="none" borderRadius="0" />
        <Search />
      </Flex>
    </Flex>
  );
};

export default SearchBar;
