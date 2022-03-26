import { Box, Stack } from "@chakra-ui/react";

const Home = () => {
  return (
    <Stack
      h="100vh"
      w="100vw"
      color="white"
      bgColor="#242424"
      fontWeight="600"
      justifyContent="center"
      alignItems="center"
    >
      <Box>Welcome to the Home Route!</Box>
    </Stack>
  );
};

export default Home;
