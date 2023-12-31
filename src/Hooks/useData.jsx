import { useQuery } from "react-query";
import useFetchLink from "../utils/useFetchLink";

const useData = () => {
  const url = useFetchLink();
  const {
    data: instructors = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["instructors"],
    queryFn: async () => {
      const res = await fetch(`${url}/instructors`);
      return res.json();
    },
  });
  return [instructors, isLoading, refetch];
};

export default useData;
