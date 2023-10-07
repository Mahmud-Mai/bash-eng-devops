import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
    required: "Please provide a name",
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
    required: "Please provide a valid email address",
  },
  phoneNumber: Number,
  password: {
    type: String,
    required: "Please provide a valid password",
    minlength: 4,
  },
});

const User = models.User || new model("User", userSchema);
export default User;
