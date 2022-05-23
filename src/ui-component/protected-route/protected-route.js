// import useLocalStorage from "../../hooks/useLocalStorage";

const ProtectedRoute = ({
                          children,
                          path,
                          ...rest
                        }) => {
  // const [data] = useLocalStorage("store", null);
  // const [roles] = useLocalStorage("roles", null);
  // if (!data) {
  //   return <Navigate to="/login" />;
  // }
  // if (roles) {
  //   if (roles.token.indexOf("admin") < 0)
  //     return <Navigate to="/access-denied" />;
  // }
  return children;
  // return <Route {...rest}>{children}</Route>;
};

export default ProtectedRoute;
