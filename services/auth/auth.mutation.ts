import { AuthType } from "@/types";
import { useMutation } from "@tanstack/react-query";
import { studentSignIn, teacherSignIn } from "./auth.api";

export const useStudentSignInMutation = () => {
  return useMutation({
    mutationFn: (auth: AuthType) => studentSignIn(auth),
  });
};

export const useTeacherSignInMutation = () => {
  return useMutation({
    mutationFn: (auth: AuthType) => teacherSignIn(auth),
  });
}