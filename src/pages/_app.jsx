// globals styles
import "@styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
// component
import NavigateLoading from "@components/navigateLoading";
// tostify
import { Slide, ToastContainer } from "react-toastify";
// context
import UserDataProvider from "@context/AuthContextProvider";

const App = ({ Component, pageProps }) => {
   return (
      <UserDataProvider>
         <NavigateLoading />
         <Component {...pageProps} />
         <ToastContainer
            transition={Slide}
            position="top-center"
            autoClose={2000}
         />
      </UserDataProvider>
   );
};

export default App;
