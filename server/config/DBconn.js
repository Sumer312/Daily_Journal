const mongoose = require("mongoose")

const connectDB = async () => {
    try{
        await mongoose.connect(`mongodb://localhost:27017/contentDB`, { useUnifiedTopology: true, useNewUrlParser: true })
                      .then(() => console.log("Connection to DB Successful"));
    }
    catch(err){
        console.log("Connection to DB failed");
    }
}

module.exports = connectDB;

