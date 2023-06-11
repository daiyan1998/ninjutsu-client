import { useQuery } from "react-query";
import useFetchLink from "../utils/useFetchLink";
import useAuth from "./useAuth";

const useInstructorClass = () => {
  const { user } = useAuth();
  const url = useFetchLink();
  const { data: instructorClass = [], refetch } = useQuery({
    queryKey: ["instructorClass"],
    queryFn: async () => {
      const res = await fetch(`${url}/instructorClass/${user.email}`);
      return res.json();
    },
  });
  return [instructorClass, refetch];
};

export default useInstructorClass;
