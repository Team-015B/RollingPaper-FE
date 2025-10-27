import { http } from "@/apis";
import { AuthType } from "@/types";

export const studentSignIn = async (auth: AuthType) => {
  const { data } = await http.post("/auth/student/signin", auth, {
    withCredentials: true,
  });
  return data;
};

export const teacherSignIn = async (auth: AuthType) => {
  const { data } = await http.post("/auth/teacher/signin", auth, {
    withCredentials: true,
  });
  return data;
};
