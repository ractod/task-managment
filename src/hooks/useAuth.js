import { AuthContext } from "@context/AuthContextProvider";
import { useContext } from "react";

const useAuth = () => {
   const state = useContext(AuthContext)
   return state
}

export default useAuth;