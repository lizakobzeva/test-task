import { Navigate, useLocation } from "react-router-dom";
import { ReactNode } from "react";

interface IProtected {
  onlyAuth?: boolean;
  component: ReactNode;
}

export const OnlyAuth = ({ component, onlyAuth = true }: IProtected) => {
  const location = useLocation();

  const token = localStorage.getItem("token");

  if (!onlyAuth && token) {
    const { from } = location?.state || {
      from: { pathname: "/main" },
    };
    return <Navigate to={from} />;
  }

  if (onlyAuth && !token) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return component;
};

export const OnlyUnAuth = ({ component }: { component: ReactNode }) => (
  <OnlyAuth component={component} onlyAuth={false} />
);
