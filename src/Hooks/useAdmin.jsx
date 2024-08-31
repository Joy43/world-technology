import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useaxiosSequre from "./AxiosSequre";





const useAdmin = () => {
    const { user, loading } = useAuth();
    const axiosSecure = useaxiosSequre();
    const { data: isAdmin, isPending: isAdminLoading } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        enabled: !loading,
        queryFn: async () => {
            console.log('asking or checking is admin', user)
            const res = await axiosSecure.get(`/users/admin/${user.email}`);
        
            return res.data?.admin;
        }
    })
    return [isAdmin, isAdminLoading]
};

export default useAdmin;