import { Flex } from "antd";
import LoginForm from "../../components/LoginForm";

const LoginPage = () => {
  return (
    <Flex
      justify="center"
      gap="middle"
      align="center"
      vertical
      style={{ height: "90vh" }}
    >
      <LoginForm />
    </Flex>
  );
};

export default LoginPage;
