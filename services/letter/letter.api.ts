import { http } from "@/apis";
import { LetterType } from "@/types";

export const sendLetter = async (letter: LetterType) => {
  const { data } = await http.post("/letter", letter);
  return data;
};
