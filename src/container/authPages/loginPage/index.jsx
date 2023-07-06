// next js
import Link from "next/link";
// components
import Input from "@components/module/Input";
import Button from "@components/module/Button";
// hooks
import useFormData from "@hooks/useFormData";
// utils
import { loginFormValidator } from "@utils/validators";
// services
import { loginUser } from "@services/authServices";
// toastify
import { toast } from "react-toastify";

const styles = {
   title: "mt-5 text-lg sm:text-xl md:text-2xl text-white font-extrabold",
   form: "flex flex-col gap-y-3 mt-3",
   button: "mt-7",
   caption: "mt-3 text-sm sm:text-base text-mute",
   link: "text-primary-light font-medium"
};

const initialValues = { email: "", password: "" }

const LoginPageContainer = () => {

   const submitHandler = async (formData) => {
      try {
         await loginUser(formData)
         window.location.pathname = "/"
      } catch (error) {
         toast.error(error.response.data.message)
      }
   }

   const { generateInputProps, submit, loading } = useFormData(
      initialValues, 
      loginFormValidator,
      submitHandler
   )

   return (
      <div className={styles.container}>
         <h3 className={styles.title}> ورود </h3>
         <form onSubmit={submit} className={styles.form}>
            <Input 
               label="ایمیل" 
               placeholder="ایمیل خود را وارد کنید"
               {...generateInputProps("email")} 
            />
            <Input 
               label="رمز ورود" 
               placeholder="رمز ورود خود را وارد کنید"
               type="password"
               {...generateInputProps("password")} 
            />
            <Button loading={loading} className={styles.button}>
               ورود 
            </Button>
         </form>
         <p className={styles.caption}>
            قبلا ثبت نام نکردید؟{" "}
            <Link href="/auth/register" className={styles.link}>
               ثبت نام
            </Link>
         </p>
      </div>
   );
};

export default LoginPageContainer;
