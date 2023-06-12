import { useContext } from "react";
import { useQuery } from "react-query";
import useFetchLink from "../utils/useFetchLink";

import { AuthContext } from "../Providers/AuthProvider";

const useSelectedClass = () => {
  const { user } = useContext(AuthContext);
  const url = useFetchLink();
  const { data, refetch } = useQuery({
    queryKey: ["selectedClasses"],
    queryFn: async () => {
      const res = await fetch(`${url}/selectedClasses?email=${user?.email}`);
      return res.json();
    },
  });

  return [data, refetch];
};

export default useSelectedClass;
