import { useQuery } from "@tanstack/react-query";
import { studentGetProfile } from "./auth.api";

export const useStudentProfile = () => {
  return useQuery({
    queryKey: ["student", "profile"],
    queryFn: studentGetProfile,
    staleTime: Infinity,
    gcTime: Infinity,
    retry: false,
    refetchOnWindowFocus: false,
  });
}