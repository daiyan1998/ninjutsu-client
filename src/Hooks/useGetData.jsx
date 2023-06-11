import { useQuery } from "react-query";
import useFetchLink from "../utils/useFetchLink";
import axios from "axios";

const useGetData = (path, qKey) => {
  const url = useFetchLink();
  const {
    data = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: [`${qKey}`],
    queryFn: async () => {
      const res = await axios.get(`${url}/${path}`);
      return res.data;
    },
  });
  return [data, isLoading, refetch];
};

export default useGetData;
