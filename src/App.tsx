import { Route, Routes } from "react-router-dom";
import { ListRoutes } from "./lib/config/RouteConfig/RouteConfig";

function App() {
  return (
    <Routes>
      {ListRoutes.map((route) => (
        <Route key={route.path} element={route.element} path={route.path} />
      ))}
    </Routes>
  );
}

export default App;
