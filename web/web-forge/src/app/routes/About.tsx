import { AnyRoute, createRoute } from "@tanstack/react-router";

// eslint-disable-next-line react-refresh/only-export-components
const About = () => {
  return <div>About</div>;
};

const aboutRoute = (rootRoute: AnyRoute) =>
  createRoute({
    getParentRoute: () => rootRoute,
    path: "/about",
    component: About,
  });

export default aboutRoute;
