import ForgetForm from "@/components/ForgetForm";
import { Flex } from "antd";

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
