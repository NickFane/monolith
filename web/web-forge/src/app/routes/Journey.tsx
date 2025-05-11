import { AnyRoute, createRoute } from "@tanstack/react-router";
import JourneyContainer from "../../features/journeys/JourneyContainer";

// eslint-disable-next-line react-refresh/only-export-components
const Journey = () => {
  return <JourneyContainer />;
};

const journeyRoute = (rootRoute: AnyRoute) =>
  createRoute({
    getParentRoute: () => rootRoute,
    path: "/journey",
    component: Journey,
  });

export default journeyRoute;
