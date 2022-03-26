import { ChakraProvider } from "@chakra-ui/react";
import { App } from "./App";
import * as React from "react";
import ReactDOM from "react-dom";
import theme from "./theme";
import { BrowserRouter } from "react-router-dom";
ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
