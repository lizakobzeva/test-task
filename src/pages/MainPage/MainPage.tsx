import { Button, Flex } from "antd";
import { logoutFetch } from "../../services/AuthByEmail/AuthByEmail";
import { useNavigate } from "react-router-dom";
import useUserData from "../../slices/UserSlice";

const MainPage = () => {
  const navigate = useNavigate();
  const { username } = useUserData();
  const logout = () => {
    logoutFetch().then(() => navigate("/login"));
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
        Log Out
      </Button>
    </Flex>
  );
};

export default MainPage;
