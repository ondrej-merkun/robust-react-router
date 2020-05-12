import React from "react";
import { Route, Switch } from "react-router-dom";

// Inspiration from:
// https://medium.com/better-programming/react-router-architecture-thats-simple-scalable-and-protected-da896827f946
//
// Tutorial describing all the typescript magic used.
// https://artsy.github.io/blog/2018/11/21/conditional-types-in-typescript/

/**
 * Render a route with potential sub routes
 * https://reacttraining.com/react-router/web/example/route-config
 */
const RouteWithSubRoutes = (route) => (
  <Route
    path={route.path}
    exact={route.exact}
    render={(props) => <route.component {...props} routes={route.routes} />}
  />
);

/**
 * Use this component for any new section of routes (any config object that has a "routes" property)
 */
const RenderRoutes = ({ routes }) => (
  <Switch>
    {routes.map((route) => {
      return <RouteWithSubRoutes key={route.key} {...route} />;
    })}
    <Route component={() => <h1>Not Found!</h1>} />
  </Switch>
);

/**
 * Create router object.
 * @param routes
 * @param notFoundElement
 */
export const createRoute = (routes, notFoundElement?: React.FC) => {
  // const flattenedRoutes: any[] = [];
  // const addRouteToFlattenedRoutes = (route) => {
  //   flattenedRoutes.push(route);
  //   if (route.routes) {
  //     for (const r of route.routes) {
  //       addRouteToFlattenedRoutes(r);
  //     }
  //   }
  // };
  // for (const route of routes) {
  //   addRouteToFlattenedRoutes(route);
  // }

  // const RouteComponent = () => (
  //   <BrowserRouter>
  //     <Switch>
  //       {routes.map((route) => (
  //         <RouteWithSubRoutes route={route} />
  //       ))}
  //       <Route component={notFoundElement ? notFoundElement : () => <h1>Not Found!</h1>} />
  //     </Switch>
  //   </BrowserRouter>
  // );

  type Routes = typeof routes[number];
  type RoutesKeys = Routes["key"];

  const createPath = (route: RoutesKeys) => {
    console.log("createPath, route: ", route);
  };

  return { RouteComponent: () => null, createPath, pushPath: undefined, replacePath: undefined, routes };
};