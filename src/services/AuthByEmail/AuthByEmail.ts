import axiosInstance from "../../lib/config/ApiConfig/axiosConfig";

export const loginFetch = async (email: string, password: string) => {
  try {
    const res = await axiosInstance.post(
      "/login",
      {
        email,
        password,
      },
      { headers: { "Content-Type": "application/json" } }
    );
    if (res.data.accessToken)
      localStorage.setItem("token", res.data.accessToken);
    return res.data.user;
  } catch (e) {
    console.log(e);
    return false;
  }
};

export const logoutFetch = async () => {
  localStorage.clear();
};
