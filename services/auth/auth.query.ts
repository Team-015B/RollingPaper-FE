import { useQuery } from "@tanstack/react-query";
import { getProfile } from "./auth.api";

export const useGetProfile = () => {
  return useQuery({
    queryKey: ["student", "profile"],
    queryFn: getProfile,
    staleTime: Infinity,
    gcTime: Infinity,
    retry: false,
    refetchOnWindowFocus: false,
  });
}