import { getUserData } from "@services/userServices";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
   
   const [userData, setUserData] = useState({ tasks: [] });
   const [loading, setLoading] = useState(true);
   const [status, setStatus] = useState(""); // auhtneticated or unAuthenticated

   const updateUserData = (newUserData) => {
      setUserData((prevState) => ({ ...prevState, ...newUserData }));
   };

   // if not authenticated request returns 401 else returns data
   const fetchUserData = async () => {
      try {
         const { data } = await getUserData();
         setUserData(data);
         setStatus("authenticated");
      } catch {
         setStatus("unAuthenticated");
      }
      setLoading(false);
   };

   useEffect(() => {
      fetchUserData();
   }, []);

   return (
      <AuthContext.Provider value={{ userData, loading, status, updateUserData }}>
         {children}
      </AuthContext.Provider>
   );
};

export default AuthContextProvider;
