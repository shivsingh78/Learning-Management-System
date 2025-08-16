import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      enum: ["student", "educator"],
    },
    password:{
     type:String,

    },
    photoUrl:{
     type:String,
     default:""
    },
    enrolledCourses:[{
     type:mongoose.Schema.Types.ObjectId,
     ref:"Course"
    }]
  },
  { timestamps: true }
); 

const User = mongoose.model("User",userSchema)
export default(User)
