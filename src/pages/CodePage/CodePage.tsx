import { Flex, notification } from "antd";

import ConfirmCodeForm from "../../components/ConfirmCodeForm";

const CodePage = () => {
  const [api, contextHolder] = notification.useNotification();

  const openErrorNotification = () => {
    api.error({
      message: "Неправильный код подтверждения ",
      showProgress: true,
      pauseOnHover: true,
    });
  };

  return (
    <>
      {contextHolder}
      <Flex
        justify="center"
        gap="middle"
        align="center"
        vertical
        style={{ height: "90vh" }}
      >
        <ConfirmCodeForm openErrorNotification={openErrorNotification} />
      </Flex>
    </>
  );
};

export default CodePage;
