import { Button, Form, FormProps, Input } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

interface Props {
  openErrorNotification: () => void;
}

type FieldType = {
  code: number;
};

const ConfirmCodeForm = ({ openErrorNotification }: Props) => {
  const navigate = useNavigate();
  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    openErrorNotification();
    console.log(values);
  };
  return (
    <Form
      name="code"
      initialValues={{ remember: true }}
      style={{ maxWidth: 360, width: "100%" }}
      onFinish={onFinish}
    >
      <Form.Item>
        <Button icon={<ArrowLeftOutlined />} onClick={() => navigate(-1)}>
          Back
        </Button>
        <p>Введите код подтверждения</p>
      </Form.Item>
      <Form.Item
        name="email"
        rules={[{ required: true, message: "Please input your Email!" }]}
      >
        <Input.OTP />
      </Form.Item>

      <Form.Item>
        <Button block type="primary" htmlType="submit">
          Reset Password
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ConfirmCodeForm;
