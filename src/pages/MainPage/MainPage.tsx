import { logoutFetch } from "@/services/AuthByEmail/AuthByEmail";
import useUserData from "@/slices/UserSlice";
import { Button, Flex } from "antd";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();
  const { username } = useUserData();
  const logout = () => {
    logoutFetch().then(() => navigate("/"));
  };
  return (
    <Flex
      justify="center"
      gap="middle"
      align="center"
      vertical
      style={{ height: "90vh" }}
    >
      <h2>Добро пожаловать {username}!</h2>
      <Button type="primary" onClick={logout}>
        Выйти из акаунта
      </Button>
    </Flex>
  );
};

export default MainPage;
