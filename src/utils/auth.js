import { compare, hash } from "bcryptjs"
import { serialize } from "cookie"
import { verify } from "jsonwebtoken"

async function hashPassword(password) {
   const hashedPassword = await hash(password, 12)
   return hashedPassword
}

async function verifiyPassword(password, hashedPassword) {
   const isPasswordVerified = await compare(password, hashedPassword)
   return isPasswordVerified
}

function setCookie(token, res) {
   const options = serialize("token", token, {
      maxAge: 24 * 60 * 60,
      httpOnly: true,
      path: "/"
   })
   res.setHeader("Set-Cookie", options)
}

function verifyToken(token) {
   try {
      const verifiedToken = verify(token, process.env.SECRET_KEY)
      return verifiedToken._id
   } catch {
      return false
   }
}

function isAuth(req, res) {
   const token = req.cookies.token
   const verifiedToken = verifyToken(token)

   if(!verifiedToken) {
      res.status(401).json({ message: "unAuthenticated" })
   }
   
   req.userId = verifiedToken
}

export { hashPassword, verifiyPassword, setCookie, verifyToken, isAuth }