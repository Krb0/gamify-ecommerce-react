import { Button, Flex, Input, Stack, chakra } from "@chakra-ui/react";
import { Send } from "@material-ui/icons";

const Newsletter = () => {
  return (
    <Stack
      height="60vh"
      bgColor="#fcf5f5"
      alignItems="center"
      spacing="0"
      justifyContent="center"
      gap="2rem"
    >
      <Stack alignItems="center" textAlign={{ base: "center", md: "left" }}>
        <chakra.h1 fontSize={{ base: "45px", xs: "70px" }}>
          Newsletter
        </chakra.h1>

        <chakra.span fontSize={{ base: "16px", xs: "24px" }} fontWeight="300">
          Get timely updates from your favorite products.
        </chakra.span>
      </Stack>

      <Flex
        width={{ base: "80%", md: "50%" }}
        height="40px"
        bgColor="white"
        justifyContent="space-between"
      >
        <Input
          border="none"
          flex="8"
          paddingLeft="20px"
          placeholder="Your email"
          borderRightRadius="none"
        />
        <Button
          flex="1"
          border="none"
          bgColor="teal"
          color="white"
          borderLeftRadius="0"
        >
          <Send />
        </Button>
      </Flex>
    </Stack>
  );
};

export default Newsletter;
