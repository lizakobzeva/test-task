import { Flex } from "antd";
import ForgetForm from "../../components/ForgetForm";

const ForgetPage = () => {
  return (
    <Flex
      justify="center"
      gap="middle"
      align="center"
      vertical
      style={{ height: "90vh" }}
    >
      <ForgetForm />
    </Flex>
  );
};

export default ForgetPage;
