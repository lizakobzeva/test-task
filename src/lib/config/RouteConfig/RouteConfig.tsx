import { ReactNode } from "react";
import MainPage from "../../../pages/MainPage/MainPage";
import LoginPage from "../../../pages/LoginPage/LoginPage";
import { OnlyAuth, OnlyUnAuth } from "./ProtectedRoute";
import ForgetPage from "../../../pages/ForgetPage/ForgetPage";
import CodePage from "../../../pages/CodePage/CodePage";

export interface IListRoutes {
  element: ReactNode;
  path: string;
}

const onlyAuthRoutes: IListRoutes[] = [
  {
    element: <MainPage />,
    path: "/main",
  },
];

const onlyUnAuthRoutes: IListRoutes[] = [
  {
    element: <LoginPage />,
    path: "/login",
  },
  {
    element: <ForgetPage />,
    path: "/forget",
  },
  {
    element: <CodePage />,
    path: "/confirmation",
  },
];

export const ListRoutes: IListRoutes[] = [
  ...onlyAuthRoutes.map((route) => ({
    ...route,
    element: <OnlyAuth component={route.element} />,
  })),
  ...onlyUnAuthRoutes.map((route) => ({
    ...route,
    element: <OnlyUnAuth component={route.element} />,
  })),
  {
    element: <div>Страница не найдена</div>,
    path: "*",
  },
];
