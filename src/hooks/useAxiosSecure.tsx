import axios from "axios";

const axiosSecure = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL as string}`,
});

const useAxiosSecure = () => {
  return axiosSecure;
};

export default useAxiosSecure;
