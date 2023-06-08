import { useQuery } from "react-query";
import useFetchLink from "../utils/useFetchLink";
import { useContext } from "react";

import { AuthContext } from "../Providers/AuthProvider";

const useSelectedClass = () => {
  const { user } = useContext(AuthContext);
  const url = useFetchLink();
  const { data: selectedClasses = [], refetch } = useQuery({
    queryKey: ["selectedClasses"],
    queryFn: async () => {
      const res = await fetch(`${url}/selectedClasses?email=${user.email}`);
      return res.json();
    },
  });
  return [selectedClasses, refetch];
};

export default useSelectedClass;
