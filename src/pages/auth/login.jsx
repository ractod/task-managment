import { useEffect } from "react";
// container
import AuthLoayout from "@container/authPages/layout";
import LoginPageContainer from "@container/authPages/loginPage";
// next js
import { useRouter } from "next/router";
// components
import DotLoading from "@components/DotLoading";
// hooks
import useAuth from "@hooks/useAuth";

const LoginPage = () => {

   const router = useRouter()
   const { status, loading } = useAuth()

   useEffect(() => {
      if(status == "authenticated") {
         router.replace("/")
      }
   }, [status])

   if(loading) {
      return <DotLoading />
   }

   return (
      <AuthLoayout>
         <LoginPageContainer />
      </AuthLoayout>
   );
};

export default LoginPage;
