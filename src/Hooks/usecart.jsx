import { useQuery } from "@tanstack/react-query";
// import useAxiosPublic from "./Axiospublic";

import useaxiosSequre from "./AxiosSequre";
import useAuth from "./useAuth";

const useCart = () => {
  const axiosSecure = useaxiosSequre();
  const { user } = useAuth();
  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: async () => {
      // const res = await axiosSecure.get('/cart');
      const res = await axiosSecure.get(`/carts?email=${user.email}`);
      // const res = await AxiosPublic.get('/carts')
      return res.data;
    },
  });

  return [cart, refetch];
};

export default useCart;
