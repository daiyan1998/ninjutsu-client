import { useQuery } from "react-query";
import useFetchLink from "../utils/useFetchLink";

const useGetData = (path, qKey) => {
  const url = useFetchLink();
  const {
    data = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: [`${qKey}`],
    queryFn: async () => {
      const res = await fetch(`${url}/${path}`);
      return res.json();
    },
  });
  return [data, isLoading, refetch];
};

export default useGetData;
