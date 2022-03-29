import { Flex } from "@chakra-ui/react";

const Icon = ({ children }: { children: React.ReactNode }) => {
  return (
    <Flex
      width="40px"
      height="40px"
      borderRadius="50%"
      bgColor="white"
      display="flex"
      alignItems="center"
      justifyContent="center"
      margin="10px"
      transition="all 0.5s ease"
      _hover={{
        bgColor: "#e9f5f5",
        transform: " scale(1.1)",
      }}
    >
      {children}
    </Flex>
  );
};

export default Icon;
