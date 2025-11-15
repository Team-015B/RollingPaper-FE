import { AuthType } from "@/types";
import { useMutation } from "@tanstack/react-query";
import { logout, signIn} from "./auth.api";
import { Toastify } from "@/components/Toastify";
import { useRouter } from "next/navigation";

export const useSignInMutation = () => {
  return useMutation({
    mutationFn: (auth: AuthType) => signIn(auth),
  });
};

export const useLogoutMutation = () => {
  return useMutation({
    mutationFn: () => logout(),
    onSuccess: () => {
      Toastify({ type: "info", content: "로그아웃 되었습니다." });
      const router = useRouter();
      router.push("/");
    },
    onError: () => {
      Toastify({ type: "error", content: "로그인이 필요합니다." });
    }
  })
}