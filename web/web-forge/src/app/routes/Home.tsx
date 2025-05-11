import { AnyRoute, createRoute } from "@tanstack/react-router";
import HomeContainer from "../../features/home/HomeContainer";

// eslint-disable-next-line react-refresh/only-export-components
const Home = () => {
  return <HomeContainer />;
};

const homeRoute = (rootRoute: AnyRoute) =>
  createRoute({
    getParentRoute: () => rootRoute,
    path: "/",
    component: Home,
  });

export default homeRoute;
