import React from "react";
import { isAuthenticated } from "../../helpers/auth";
import { Route, Redirect } from "react-router-dom";
const  PrivateRoute =({ children, ...rest })=> {
   
    return (
      <Route
        {...rest}
        render={({ location }) =>
        isAuthenticated() ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }

  export default PrivateRoute;