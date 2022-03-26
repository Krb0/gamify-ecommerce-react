import { Flex } from "@chakra-ui/react";

const Announcement = () => {
  return (
    <Flex
      height="30px"
      bgColor="teal"
      color="white"
      alignItems="center"
      justifyContent="center"
      fontSize="0.9rem"
      fontWeight="500"
    >
      Super Deal! Free Shipping on Order Over $50
    </Flex>
  );
};

export default Announcement;
