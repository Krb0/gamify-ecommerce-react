import { Flex } from "@chakra-ui/react";
import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import Icon from "./Icon";
const Buttons = () => {
  return (
    <Flex>
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
