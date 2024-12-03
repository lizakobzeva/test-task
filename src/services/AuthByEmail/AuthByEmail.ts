import axiosInstance from "@/lib/config/ApiConfig/axiosConfig";

interface loginFetchResponse {
  accessToken: string;
  user: {
    email: string;
    id: number;
    username: string;
  };
}

export const loginFetch = async (email: string, password: string) => {
  try {
    const res = await axiosInstance.post<loginFetchResponse>("/login", {
      email,
      password,
    });
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
