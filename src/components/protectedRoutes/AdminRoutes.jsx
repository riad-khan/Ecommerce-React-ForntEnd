import React from "react";
import { isAuthenticated,userInfo } from "../../helpers/auth";
import { Route, Redirect } from "react-router-dom";
const  AdminRoutes =({ children, ...rest })=> {
   
    return (
      <Route
        {...rest}
        render={({ location }) =>
        isAuthenticated() && userInfo().role === 'admin' ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }

  export default AdminRoutes;