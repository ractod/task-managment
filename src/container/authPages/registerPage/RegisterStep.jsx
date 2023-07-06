// next js
import Link from "next/link";
// components
import Input from "@components/module/Input";
import Button from "@components/module/Button";
import useFormData from "@hooks/useFormData";
// utils
import { registerFormValidator } from "@utils/validators";
// services
import { registerUser } from "@services/authServices";
// toastify
import { toast } from "react-toastify";

const styles = {
   title: "mt-5 text-lg sm:text-xl md:text-2xl text-white font-extrabold",
   form: "flex flex-col gap-y-3 mt-3",
   button: "mt-7",
   caption: "mt-3 text-sm sm:text-base text-mute",
   link: "text-primary-light font-medium",
};

const intialValues = {
   name: "",
   email: "",
   password: "",
};

const RegisterStep = ({ setStep }) => {

   const submitHandler = async (formData) => {
      try {
         const { data } = await registerUser(formData)
         toast.success(data.message)
         setStep(2)
      } catch (error) {
         toast.error(error.response.data.message)
      }
   }

   const { generateInputProps, submit, loading } = useFormData(
      intialValues,
      registerFormValidator,
      submitHandler
   );

   return (
      <div className={styles.container}>
         <h3 className={styles.title}>ثبت نام </h3>
         <form onSubmit={submit} className={styles.form}>
            <Input
               label="نام"
               placeholder="نام خود را وارد کنید"
               type="text"
               {...generateInputProps("name")}
            />
            <Input
               label="ایمیل"
               placeholder="ایمیل خود را وارد کنید"
               type="email"
               {...generateInputProps("email")}
            />
            <Input
               label="رمز ورود"
               placeholder="رمز ورود خود را وارد کنید"
               type="password"
               {...generateInputProps("password")}
            />
            <Button className={styles.button} loading={loading}>ثبت نام </Button>
         </form>
         <p className={styles.caption}>
            قبلا ثبت نام کردید؟{" "}
            <Link href="/auth/login" className={styles.link}> ورود </Link>
         </p>
      </div>
   );
};

export default RegisterStep;
