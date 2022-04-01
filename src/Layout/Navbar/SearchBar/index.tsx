import { Flex, Input } from "@chakra-ui/react";
import { Search } from "@material-ui/icons";

const SearchBar = () => {
  return (
    <Flex flex="1" alignItems="center">
      <Flex
        border="1px solid lightgray"
        borderRadius="3x"
        alignItems="center"
        marginLeft="25px"
        width="full"
      >
        <Input border="none" borderRadius="0" />
        <Search />
      </Flex>
    </Flex>
  );
};

export default SearchBar;
