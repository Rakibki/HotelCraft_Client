import axios from "axios";

const axiosLocal = axios.create({
  baseURL: "http://localhost:3002",
  withCredentials: true,
});

const useAxiosLocal = () => {
  return axiosLocal;
};

export default useAxiosLocal;
