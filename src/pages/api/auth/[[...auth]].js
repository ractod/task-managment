import UserModel from "@models/User";
import { hashPassword, setCookie, verifiyPassword, verifyToken } from "@utils/auth";
import connectDB from "@utils/connectDB";
import { serialize } from "cookie";
import { sign } from "jsonwebtoken";
import { createRouter } from "next-connect";

const router = createRouter()

router.use(async (req, res, next) => {
   await connectDB()
   next()
})

router.get("/api/auth", async (req, res) => {
   const token = req.cookies.token
   const verifiedToken = verifyToken(token)

   if(!verifiedToken) {
      res.status(401).json({ message: "unAuthenticated" })
   }

   res.status(200).json({ message: "authenticated" })
})

router.post("/api/auth/register", async (req, res) => {
   const { email, password, name } = req.body
   console.log(req.body)

   const existingEmail = await UserModel.exists({ email })
   if(existingEmail) {
      res.status(400).json({ message: "این ایمیل قبلا توسط کاربری استفاده شده است" })
   }

   const hashedPassword = await hashPassword(password)
   const user = await UserModel.create({ email, name, password: hashedPassword })
   delete user.password
   
   const token = sign({_id: user._id}, process.env.SECRET_KEY, { expiresIn: 24 * 60 * 60 })
   setCookie(token, res)
   
   res.status(201).json({ message: "حساب شما با موفقیت ساخته شد" })
})

router.post("/api/auth/login", async (req, res) => {
   const { email, password } = req.body

   const user = await UserModel.findOne({ email })
   if(!user) {
      return res.status(400).json({ message: "ایمیل یا رمز عبور اشتباه می باشد" })
   }

   const isPasswordVerified = await verifiyPassword(password, user.password)
   if(!isPasswordVerified) {
      return res.status(400).json({ message: "ایمیل یا رمز عبور اشتباه می باشد" })
   }

   const token = sign({_id: user._id}, process.env.SECRET_KEY, { expiresIn: 24 * 60 * 60 })
   setCookie(token, res)

   res.status(200).json({ message: "شما با موفقیت وارد حساب خود شدید" })
})

router.get("/api/auth/logout", async (req, res) => {
   console.log("test")
   const token = sign({}, process.env.SECRET_KEY, { expiresIn: 0 })
   const options = serialize("token", token, {
      maxAge: 0,
      httpOnly: true,
      path: "/"
   })
   res.setHeader("Set-Cookie", options)
   res.status(200).json({ message: "شما با موفقیت از حساب خود خارج شدید" })
})

export default router.handler()