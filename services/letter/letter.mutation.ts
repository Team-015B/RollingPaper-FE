import { LetterType } from "@/types";
import { useMutation } from "@tanstack/react-query";
import { sendLetter } from "./letter.api";

export const useSendLetterMutation = () => {
  return useMutation({
    mutationFn: (letter: LetterType) => sendLetter(letter),
  });
};
