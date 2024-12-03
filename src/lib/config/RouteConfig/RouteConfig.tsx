import { ReactNode } from "react";
import { OnlyAuth, OnlyUnAuth } from "./ProtectedRoute";
import MainPage from "@/pages/MainPage/MainPage";
import LoginPage from "@/pages/LoginPage/LoginPage";
import ForgetPage from "@/pages/ForgetPage/ForgetPage";
import CodePage from "@/pages/CodePage/CodePage";

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
    path: "/",
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
