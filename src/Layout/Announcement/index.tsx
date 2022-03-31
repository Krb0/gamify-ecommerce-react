import { Flex } from "@chakra-ui/react";

const Announcement = () => {
  return (
    <Flex
      height="30px"
      bgGradient="linear-gradient(155deg, rgba(122,36,175,0.78) 34%, rgba(85,36,175,0.78) 70%)"
      color="white"
      alignItems="center"
      justifyContent="center"
      fontSize={{ base: "0.78rem", xs: "0.9rem" }}
      fontWeight="500"
    >
      Super Deal! Free Shipping on Order Over $50
    </Flex>
  );
};

export default Announcement;
