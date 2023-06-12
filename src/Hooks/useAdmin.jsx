import { useQuery } from "react-query";
import useAuth from "./useAuth";
import useFetchLink from "../utils/useFetchLink";
import axios from "axios";
const useAdmin = () => {
  const url = useFetchLink();
  const { user } = useAuth();
  const { data: role } = useQuery({
    queryKey: ["role", user?.email],
    queryFn: async () => {
      const res = await axios.get(`${url}/users/admin/${user?.email}`);
      return res?.data?.role;
    },
  });
  return [role];
};

export default useAdmin;
