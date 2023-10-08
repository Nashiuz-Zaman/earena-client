// react imports
import { useContext } from "react";

// context imports
import { AuthContext } from "../contexts/AuthProvider";

const useAuthContext = () => {
  const authContextValue = useContext(AuthContext);

  return authContextValue;
};

export default useAuthContext;
