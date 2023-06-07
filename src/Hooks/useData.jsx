import { useQuery } from "react-query";

const useData = () => {
  const {
    data: instructors = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["instructors"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/instructors");
      return res.json();
    },
  });
  return [instructors, isLoading, refetch];
};

export default useData;
