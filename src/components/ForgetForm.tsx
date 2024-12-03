import { Button, Form, FormProps, Input } from "antd";
import { ArrowLeftOutlined, UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
type FieldType = {
  email: string;
};

const ForgetForm = () => {
  const navigate = useNavigate();
  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    console.log(values);
    navigate("/confirmation");
  };
  return (
    <Form
      name="forget"
      initialValues={{ remember: true }}
      style={{ maxWidth: 360, width: "100%" }}
      onFinish={onFinish}
    >
      <Form.Item>
        <Button icon={<ArrowLeftOutlined />} onClick={() => navigate(-1)}>
          Back
        </Button>
        <p>Код подтверждения будет отправлен на вашу электронную почту</p>
      </Form.Item>

      <Form.Item
        name="email"
        rules={[{ required: true, message: "Please input your Email!" }]}
      >
        <Input prefix={<UserOutlined />} placeholder="Email" type="email" />
      </Form.Item>

      <Form.Item>
        <Button block type="primary" htmlType="submit">
          Get Code
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ForgetForm;
