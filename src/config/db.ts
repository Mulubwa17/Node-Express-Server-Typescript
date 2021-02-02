import { ConnectionOptions, connect } from "mongoose";

const connectDB = async () => {
  try {
    const mongoURI = "mongodb://127.0.0.1:27017/NodeTypescript";
    const options: ConnectionOptions = {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    };
    await connect(mongoURI, options);
    console.log("Connected to databse successfully...");
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

export default connectDB;