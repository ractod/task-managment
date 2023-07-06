import TaskModel from "@models/Task";
import UserModel from "@models/User";
import { isAuth } from "@utils/auth";
import connectDB from "@utils/connectDB";
import { createRouter } from "next-connect";

const router = createRouter()

router.use(async (req, res, next) => {
   await connectDB()
   isAuth(req, res)
   next()
})

router.post("/api/tasks", async (req, res) => {
   const task = await TaskModel.create(req.body)
   const user = await UserModel.findById(req.userId).populate("tasks")

   user.tasks.push(task)
   await user.save()

   res.status(201).json({ tasks: user.tasks, message: "تسک شما با موفقیت ساخته شد" })
})

router.patch("/api/tasks/:taskId", async (req, res) => {
   console.log(req.params.taskId)
   await TaskModel.findByIdAndUpdate(req.params.taskId, req.body, { new: true })
   const user = await UserModel.findById(req.userId).populate("tasks")

   res.status(201).json({ tasks: user.tasks, message: "تسک شما با موفقیت تغییر کرد" })
})

router.post("/api/tasks/next/:taskId", async (req, res) => {
   const task = await TaskModel.findById(req.params.taskId)
   
   task.stage++
   await task.save()

   const user = await UserModel.findById(req.userId).populate("tasks")

   res.status(201).json({ tasks: user.tasks, message: "تسک شما با موفقیت تغییر کرد" })
})

router.post("/api/tasks/pervious/:taskId", async (req, res) => {
   const task = await TaskModel.findById(req.params.taskId)

   task.stage--
   await task.save()
   
   const user = await UserModel.findById(req.userId).populate("tasks")

   res.status(201).json({ tasks: user.tasks, message: "تسک شما با موفقیت تغییر کرد" })
})

router.delete("/api/tasks/:taskId", async (req, res) => {
   await TaskModel.findByIdAndRemove(req.params.taskId)
   const user = await UserModel.findById(req.userId).populate("tasks")

   res.status(200).json({tasks: user.tasks, message: "تسک شما با موفقیت حذف شد"})
})

export default router.handler()