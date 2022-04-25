const mongoose = require("mongoose");

//create function to connect to the database
const dbConnect = async () => {
  try {
    //connecting to the database
    await mongoose.connect(
      "mongodb+srv://star:star@cluster0.alagc.mongodb.net/class-learn?retryWrites=true&w=majority"
    );
    console.log("db connected successfully");
  } catch (error) {
    //throw error for debugging
    console.log(error);
    process.exit(1);
  }
};

module.exports = {
  dbConnect,
};
