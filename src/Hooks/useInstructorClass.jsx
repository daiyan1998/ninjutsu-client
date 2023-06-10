import { useQuery } from "react-query";
import useFetchLink from "../utils/useFetchLink";

const useInstructorClass = () => {
  const url = useFetchLink();
  const { data: instructorClass = [], refetch } = useQuery({
    queryKey: ["instructorClass"],
    queryFn: async () => {
      const res = await fetch(`${url}/instructorClass`);
      return res.json();
    },
  });
  return [instructorClass, refetch];
};

export default useInstructorClass;
