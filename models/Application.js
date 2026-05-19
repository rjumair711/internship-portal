import mongoose from "mongoose";

const ApplicationSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    phone: String,
    domain: String,
    message: String,
  },
  {
    timestamps: true,
  }
);

const Application =
  mongoose.models.Application ||
  mongoose.model("Application", ApplicationSchema);

export default Application;