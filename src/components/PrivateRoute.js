// import React from "react";
// import { Route, redirect } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

// const PrivateRoute = ({ element: Component, ...rest }) => {
//   const { currentUser } = useAuth();
//   return (
//     <Route
//       {...rest}
//       render={(props) => {
//         currentUser ? <Component {...props} /> : redirect("/login");
//       }}
//     ></Route>
//   );
// };

// export default PrivateRoute;
import React from "react";

import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function PrivateRoute({ children }) {
  //if there is no user page won't be displayed
  const { currentUser } = useAuth();

  return currentUser ? children : <Navigate to="/login" />;
}
