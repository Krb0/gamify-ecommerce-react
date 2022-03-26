import { Box } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Box>Hello World</Box>} />
    </Routes>
  );
};
