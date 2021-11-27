import React from "react";
import { Route } from "react-router-dom";

const MainRoute = (props) => {
  const { children, ...rest } = props;

  return (
    <Route {...rest}>
      <div>Test 2</div>
      {children}
    </Route>
  );
};

export default MainRoute;
