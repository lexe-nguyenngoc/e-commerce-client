import { useSelector } from "react-redux";
import { authSelector } from "../authSlice";

const useAuth = () => {
  const auth = useSelector(authSelector);

  return { auth };
};

export default useAuth;
