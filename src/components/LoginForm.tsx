import {
  Button,
  Checkbox,
  Flex,
  Form,
  FormProps,
  Input,
  notification,
} from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import useUserData from "@/slices/UserSlice";
import { loginFetch } from "@/services/AuthByEmail/AuthByEmail";

type FieldType = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const [api, contextHolder] = notification.useNotification();
  const navigate = useNavigate();
  const { setUserData } = useUserData();

  const openErrorNotification = () => {
    api.error({
      message: "Ошибка авторизации",
      description: "Не правильный логин или пароль",
      showProgress: true,
      pauseOnHover: true,
    });
  };

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    await loginFetch(values.email, values.password).then((data) => {
      if (data) {
        setUserData(data.username, data.email);
        navigate("/main");
      } else {
        openErrorNotification();
      }
    });
  };

  return (
    <>
      {contextHolder}
      <Form
        name="login"
        initialValues={{ remember: true }}
        style={{ maxWidth: 360, width: "100%" }}
        onFinish={onFinish}
      >
        <Form.Item>Войти</Form.Item>
        <Form.Item
          name="email"
          rules={[{ required: true, message: "Введите email!" }]}
        >
          <Input prefix={<UserOutlined />} placeholder="Email" type="email" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Введите пароль!" }]}
        >
          <Input.Password
            prefix={<LockOutlined />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Flex justify="space-between" align="center">
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Запомнить меня</Checkbox>
            </Form.Item>
            <Link to="/forget">Забыли пароль?</Link>
          </Flex>
        </Form.Item>

        <Form.Item>
          <Button block type="primary" htmlType="submit">
            Войти
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default LoginForm;
