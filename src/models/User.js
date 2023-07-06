import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
   name: {
      type: String,
      required: true
   },
   email: {
      type: String,
      required: true
   },
   password: {
      type: String,
      required: true
   },
   age: {
      type: String,
      default: ""
   },
   postCode: {
      type: String,
      default: ""
   },
   address: {
      type: String,
      default: ""
   },
   phone: {
      type: String,
      default: ""
   },
   tasks: [{ 
      type: Schema.Types.ObjectId, 
      ref: "Task" 
   }]
})

const UserModel = models.User || model("User", UserSchema)

export default UserModel