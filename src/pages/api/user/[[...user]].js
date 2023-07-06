import UserModel from "@models/User";
import TaskModel from "@models/Task";
import { isAuth, verifiyPassword } from "@utils/auth";
import connectDB from "@utils/connectDB";
import { createRouter } from "next-connect";

const router = createRouter()

router.use(async (req, res, next) => {
   await connectDB()
   isAuth(req, res)
   next()
})

router.get("/api/user", async (req, res) => {
   const user = await UserModel.findById(req.userId).populate("tasks")
   delete user._doc.password
   res.status(200).json(user)
})

router.patch("/api/user", async (req, res) => {
   const user = await UserModel.findByIdAndUpdate(req.userId, req.body, { new: true })
   res.status(200).json({
      user,
      message: "اطلاعات شما با موفقیت ثبت شد"
   })
})

router.patch("/api/user/profile", async (req, res) => {
   const newUserData = req.body
   const user = await UserModel.findById(req.userId)

   const isPasswordVerified = await verifiyPassword(newUserData.password, user.password)
   if(!isPasswordVerified) {
      res.status(400).json({ message: "برای به روزرسانی اطلاعات خود رمز درست را وارد کنید" })
   }

   const existingEmail = await UserModel.exists({ email: newUserData.email })
   if(existingEmail && newUserData.email != user.email) {
      res.status(400).json({ message: "این ایمیل توسط کاربر دیگر استفاده شده است" })
   }

   const updatedUser = await UserModel.findByIdAndUpdate(
      req.userId, 
      {...newUserData, password: user.password}, 
      {new: true}
   )
   delete updatedUser._doc.password

   res.status(200).json({
      user: updatedUser,
      message: "اطلاعات شما با موفقیت ثبت شد"
   })
})

export default router.handler()