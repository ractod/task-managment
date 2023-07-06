import http from "./httpService";

const createTask = (formData) => http.post("/api/tasks", formData);
const updateTask = (formData, taskId) => http.patch(`/api/tasks/${taskId}`, formData);
const updateToNextStage = (taskId) => http.post(`/api/tasks/next/${taskId}`);
const updateToPerviousStage = (taskId) => http.post(`/api/tasks/pervious/${taskId}`);
const deleteTask = (taskId) => http.delete(`/api/tasks/${taskId}`);

export {
   createTask,
   updateTask,
   updateToNextStage,
   updateToPerviousStage,
   deleteTask,
};
