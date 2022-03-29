import { Box, Flex } from "@chakra-ui/react";
import { Badge, MenuItem } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";

const Buttons = () => {
  return (
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
  );
};

export default Buttons;
