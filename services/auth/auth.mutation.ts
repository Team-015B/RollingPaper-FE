import { AuthType } from "@/types";
import { useMutation } from "@tanstack/react-query";
import { signIn} from "./auth.api";

export const useSignInMutation = () => {
  return useMutation({
    mutationFn: (auth: AuthType) => signIn(auth),
  });
};