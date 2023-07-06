import { Schema, model, models } from "mongoose";

const TaskSchema = new Schema({
   title: String,
   description: String,
   stage: {
      type: String,
      default: 1
   }
})

const TaskModel = models.Task || model("Task", TaskSchema)

export default TaskModel