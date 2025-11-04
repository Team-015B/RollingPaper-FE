import { http } from "@/apis";
import { AuthType } from "@/types";

export const signIn = async (auth: AuthType) => {
  const { data } = await http.post("/auth/signin", auth, {
    withCredentials: true,
  });
  return data;
};

export const getProfile = async () => {
  const { data } = await http.get("/auth/me", {
    withCredentials: true,
  });
  console.log(data)
  return data;
};