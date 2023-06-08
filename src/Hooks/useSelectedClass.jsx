import { useQuery } from "react-query";
import useFetchLink from "../utils/useFetchLink";

const useSelectedClass = () => {
  const url = useFetchLink();
  const {
    data: selectedClasses = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["selectedClasses"],
    queryFn: async () => {
      const res = await fetch(`${url}/selectedClasses`);
      return res.json();
    },
  });
  return [selectedClasses, isLoading, refetch];
};

export default useSelectedClass;
