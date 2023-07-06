import http from "./httpService"

const registerUser = (formdata) => http.post("/api/auth/register", formdata)
const loginUser = (formData) => http.post("/api/auth/login", formData)
const getSession = () => http.get("/api/auth")
const logoutUser = () => http.get("/api/auth/logout")

export { registerUser, loginUser, getSession, logoutUser }