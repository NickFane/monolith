import { AnyRoute } from '@tanstack/react-router';
import aboutRoute from './About';
import homeRoute from './Home';
import journeyRoute from './Journey';

export const Routes = (rootRoute: AnyRoute) => [
    homeRoute(rootRoute),
    aboutRoute(rootRoute),
    journeyRoute(rootRoute)
]