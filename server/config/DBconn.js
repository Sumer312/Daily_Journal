const mongoose = require("mongoose")

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, { useUnifiedTopology: true, useNewUrlParser: true })
      .then(() => console.log("Connection to DB Successful"));
  }
  catch (err) {
    console.log("Connection to DB failed");
  }
}

module.exports = connectDB;

