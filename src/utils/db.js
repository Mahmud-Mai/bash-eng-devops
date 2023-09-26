import mongoose from "mongoose";

const connectdb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
  } catch (error) {
    console.log(`🚀 ~ connect ~ error:`, error);
  }
};

export default connectdb;
