import http from "./httpService";

const getUserData = () => http.get("/api/user");
const completeUserData = (formData) => http.patch("/api/user", formData);
const updateUserProfile = (formData) => http.patch("/api/user/profile", formData)

export { getUserData, completeUserData, updateUserProfile };
