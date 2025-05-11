import {
  createRootRoute,
  createRouter,
  Outlet,
  RouterProvider,
} from "@tanstack/react-router";
import "./App.css";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { Routes } from "./routes";
import { NavTree } from "../components";
import { Flex } from "@chakra-ui/react";

const sideBarComponent = () => {
  return (
    <Flex
      width={"240px"}
      height={"calc(100vh - 40px)"}
      background={"gray.100"}
      justifyContent={"center"}
      alignItems={"center"}
    ></Flex>
  );
};

const rootRoute = createRootRoute({
  component: () => (
    <Flex flexDir={"column"} height={"100vh"}>
      <NavTree />
      <Flex justifyContent={"space-between"}>
        {sideBarComponent()}
        <Flex
          paddingTop={"80px"}
          width={"100%"}
          justifyContent={"center"}
          height={"100%"}
        >
          <Outlet />
        </Flex>
        {sideBarComponent()}
      </Flex>
      <TanStackRouterDevtools />
    </Flex>
  ),
});

const routeTree = rootRoute.addChildren([...Routes(rootRoute)]);

const router = createRouter({
  routeTree,
});

function App() {
  return <RouterProvider router={router} />;
}

export default App;
