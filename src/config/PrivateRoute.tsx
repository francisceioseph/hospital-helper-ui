import React, { FC, useState } from "react";
import { Route, RouteProps, Redirect } from "react-router";
import { loginRoute } from "../components/pages/login/LoginPage";

export const PrivateRoute: FC<RouteProps> = ({ children, ...rest }) => {
  const [authenticated] = useState(true);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        authenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: loginRoute,
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};
