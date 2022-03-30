import { Flex } from "@chakra-ui/react";
import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import Icon from "./Icon";
const Buttons = () => {
  return (
    <Flex
      h="full"
      w="full"
      alignItems="center"
      justifyContent="center"
      position="absolute"
      zIndex="3"
      cursor="pointer"
      opacity="0"
      transition="all 0.25s"
      _groupHover={{
        bgColor: "rgba(0,60,0,0.8)",
        opacity: "1",
      }}
    >
      <Icon>
        <SearchOutlined />
      </Icon>
      <Icon>
        <ShoppingCartOutlined />
      </Icon>
      <Icon>
        <FavoriteBorderOutlined />
      </Icon>
    </Flex>
  );
};

export default Buttons;
