// components
import Input from "@components/module/Input";
import Button from "@components/module/Button";
// hooks
import useFormData from "@hooks/useFormData";
// utils
import { completeFormValidator } from "@utils/validators"
// service
import { completeUserData } from "@services/userServices";
import { toast } from "react-toastify";

const styles = {
   title: "mt-5 text-lg sm:text-xl md:text-2xl text-white font-extrabold",
   form: "flex flex-col gap-y-3 mt-3",
   button: "mt-7 w-full",
   caption: "mt-3 text-sm sm:text-base text-mute",
   link: "text-primary-light font-medium",
};

const intialValues = {
   phone: "",
   address: "",
   postCode: "",
   age: "",
};

const CompleteStep = () => {
   const submitHandler = async (formData) => {
      try {
         const { data } = await completeUserData(formData);
         toast.success(data.message);
         window.location.pathname = "/"
      } catch {
         toast.error("مشکلی پیش آمده لطفا دوباره امتحان کنید");
      }
   };

   const { generateInputProps, submit, loading } = useFormData(
      intialValues,
      completeFormValidator,
      submitHandler
   );

   return (
      <div className={styles.container}>
         <h3 className={styles.title}> تکمیل اطلاعات </h3>
         <form onSubmit={submit} className={styles.form}>
            <Input
               label="شماره موبایل"
               placeholder="شماره موبایل خود را وارد کنید"
               type="number"
               {...generateInputProps("phone")}
            />
            <Input
               label="آدرس"
               placeholder="آدرس خود را وارد کنید"
               type="text"
               {...generateInputProps("address")}
            />
            <Input
               label="کد پستی"
               placeholder=" کد پستی خود را وارد کنید"
               type="number"
               {...generateInputProps("postCode")}
            />
            <Input
               label="سن"
               placeholder=" سن خود را وارد کنید"
               type="number"
               {...generateInputProps("age")}
            />
            <Button className={styles.button} loading={loading}>
               تکمیل اطلاعات
            </Button>
         </form>
      </div>
   );
};

export default CompleteStep;
