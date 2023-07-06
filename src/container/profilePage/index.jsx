// components
import Button from "@components/module/Button";
import Input from "@components/module/Input";
// hook
import useFormData from "@hooks/useFormData";
import { profileFormValidator } from "@utils/validators";
import { updateUserProfile } from "@services/userServices";
import { toast } from "react-toastify";
import useAuth from "@hooks/useAuth";

const initialValues = {
   email: "",
   name: "",
   password: "",
   address: "",
   phone: "",
   age: "",
   postCode: ""
}

const ProfilePageContainer = () => {

   const { userData, updateUserData } = useAuth()

   const submitHandler = async (formdata) => {
      try {
         const { data } = await updateUserProfile(formdata)
         toast.success(data.message)
         updateUserData(data.user)
      } catch (error) {
         toast.error(error.response.data.message)
      }
   }

   const { generateInputProps, loading, submit } = useFormData(
      {...initialValues, ...userData},
      profileFormValidator,
      submitHandler
   )

   return (
      <form onSubmit={submit}>
         <div className="grid grid-cols-2 gap-4">
            <Input 
               label="نام"
               placeholder="نام خود را وارد کنید"
               {...generateInputProps("name")}
            />
            <Input 
               label="ایمیل"
               placeholder="ایمیل خود را وارد کنید"
               type="email"
               {...generateInputProps("email")}
            />
            <Input 
               label="شماره موبایل"
               placeholder="شماره موبایل خود را وارد کنید"
               type="number"
               {...generateInputProps("phone")}
            />
            <Input 
               label="آدرس"
               placeholder="آدرس خود را وارد کنید"
               {...generateInputProps("address")}
            />
            <Input 
               label="کد پستی"
               placeholder="کد پستی خود را وارد کنید"
               type="number"
               {...generateInputProps("postCode")}
            />
            <Input 
               label="سن"
               placeholder="سن خود را وارد کنید"
               type="number"
               {...generateInputProps("age")}
            />
            <Input 
               label="رمز"
               placeholder="رمز خود را وارد کنید"
               type="password"
               {...generateInputProps("password")}
            />
         </div>
         <Button loading={loading} className="mt-5">
            تغییر اطلاعات
         </Button>
      </form>
   );
}

export default ProfilePageContainer;