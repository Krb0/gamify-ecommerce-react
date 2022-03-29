import { Stack, chakra, Button } from "@chakra-ui/react";
import { SliderItemsType } from "../../../../../data";

const SliderInfo = ({ item }: { item: SliderItemsType }) => {
  return (
    <Stack padding="50px" flex={{ base: "2", xl: "1" }}>
      <chakra.h3
        fontSize={{ base: "2rem", xl: "4.5rem" }}
        fontWeight="bold"
        color={item.textColor}
        mb="2rem"
      >
        {item.title}
      </chakra.h3>
      <chakra.p
        pb="0.5rem"
        fontSize={{ base: "1rem", xl: "1.4rem" }}
        letterSpacing="0.2rem"
      >
        {item.description}
      </chakra.p>
      <Button
        width="fit-content"
        bgColor="transparent"
        border="2px solid #444"
        _hover={{
          color: "white",
          bgColor: "#444",
        }}
        _active={{
          color: "white",
          bgColor: "#444",
        }}
        _focus={{ outline: "none" }}
      >
        SHOW NOW
      </Button>
    </Stack>
  );
};

export default SliderInfo;
