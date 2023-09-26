import mongoose from "mongoose";

const connect = async () => {
  try {
    const res = await mongoose.connect(process.env.MONGO_URL);
    if (res) console.log(`🚀 ~ connect ~ res: DB connection successful`);
  } catch (error) {
    console.log(`🚀 ~ connect ~ error:`, error);
  }
};

export default connect;
