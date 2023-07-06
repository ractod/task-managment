import { useEffect } from "react";
import { useRouter } from "next/router";
import DotLoading from "@components/DotLoading";
import useAuth from "@hooks/useAuth";

const WithAuth = (WrappedComponent) => {
   
   const EnhancedComponent = () => {
      const router = useRouter();
      const { status, loading } = useAuth()

      useEffect(() => {
         if (status == "unAuthenticated") {
            router.replace("/auth/login");
         }
      }, [status]);

      if (loading) {
         return <DotLoading />;
      }

      return <WrappedComponent />;
   };

   return EnhancedComponent;
};

export default WithAuth;
