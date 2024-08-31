import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://server-assingment-12.vercel.app",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
