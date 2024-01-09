import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { authContext } from "../providers/AuthProvaider";
import Loader from "../components/loader/Loader";

const PrivateRoute = ({children}) => {
  const { user, loadding } = useContext(authContext);
  const location = useLocation();

  if(loadding) <Loader />

  if(user && user?.email) {
    return children
  }

  return <Navigate state={location?.pathname} to={"/login"} />;
};

export default PrivateRoute;
