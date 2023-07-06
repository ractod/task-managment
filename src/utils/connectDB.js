import mongoose from "mongoose"

async function connectDB() {
   if(mongoose.connections[0].readyState) return
   try {
      await mongoose.connect(process.env.MONGO_URI, {
         useNewUrlParser: true,
         useUnifiedTopology: true,
      })
      console.log("mongoDB in Connected")
   } catch {
      console.log("Failed in Connecting to mongoDB")
   }
}

export default connectDB