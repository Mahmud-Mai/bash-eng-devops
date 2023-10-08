import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  phoneNumber: Number,
});

const User = models.User || new model("User", userSchema);
export default User;

// name: {
//   type: String,
//   required: "Please provide a name",
//   trim: true,
// },
// email: {
//   type: String,
//   unique: true,
//   lowercase: true,
//   trim: true,
//   required: "Please provide a valid email address",
// },
// password: {
//   type: String,
//   required: "Please provide a valid password",
//   minlength: 4,
// },
