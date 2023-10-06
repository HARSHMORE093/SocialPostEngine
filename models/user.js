import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: {type: String,
    required: true,
    min: 3,
    max: 15,
    unique: true },
  email: { type: String, required: true },
  password: { type: String,min: 6,required: true },
  id: { type: String },
});

export default mongoose.model("User", userSchema);