import { Box, Flex, chakra, Input } from "@chakra-ui/react";
import { Badge, MenuItem } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";

const Navbar = () => {
  return (
    <Box height="60px">
      <Flex
        padding={{ base: "1rem 1rem ", "2xl": "1rem 5rem" }}
        justifyContent="space-between"
        alignItems="center"
      >
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
        <chakra.h1 flex="1" fontWeight="700" fontSize="2rem" textAlign="center">
          Jade
        </chakra.h1>
        <Flex flex="1" alignItems="center" justifyContent="flex-end">
          <MenuItem>Login</MenuItem>
          <MenuItem>Register</MenuItem>
          <Box
            cursor="pointer"
            padding="6px 16px"
            _hover={{
              bgColor: "#f5f5f5",
            }}
          >
            <Badge badgeContent={4} color="secondary">
              <ShoppingCartOutlined color="action" />
            </Badge>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
