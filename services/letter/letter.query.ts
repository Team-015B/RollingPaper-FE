import { useQuery } from "@tanstack/react-query";
import { receivedLetter } from "./letter.api";

export const useReceivedLetter = () => {
  return useQuery({
    queryKey: ["receivedLetter"],
    queryFn: receivedLetter,
    staleTime: Infinity,
    gcTime: Infinity,
    retry: false,
    refetchOnWindowFocus: false,
  });
};
