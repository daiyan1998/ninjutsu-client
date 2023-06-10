import { useQuery } from "react-query";
import useAuth from "./useAuth";
import useFetchLink from "../utils/useFetchLink";
import axios from "axios";
const useAdmin = () => {
  const url = useFetchLink();
  const { user } = useAuth();
  const { data: isAdmin } = useQuery({
    queryKey: ["isAdmin", user?.email],
    queryFn: async () => {
      const res = await axios.get(`${url}/users/admin/${user?.email}`);
      return res.data.admin;
    },
  });
  return [isAdmin];
};

export default useAdmin;
