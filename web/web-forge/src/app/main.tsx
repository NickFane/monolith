import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { ThemeProvider } from "@emotion/react";
import { Provider } from "react-redux";
import { store } from "../store/store";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <ChakraProvider value={defaultSystem}>
        <ThemeProvider theme={defaultSystem}>
          <App />
        </ThemeProvider>
      </ChakraProvider>
    </Provider>
  </StrictMode>
);
