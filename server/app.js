const express = require("express");
const cors = require("cors");
const postImageRouter = require("./routes/postImage");
const ContentRouter = require("./routes/Content");
const app = express();
const PORT = process.env.PORT || 8000;
const connectDB = require("./config/DBconn");


connectDB();
app.use(express.urlencoded({extended:true, limit : "50mb"}));
app.use(express.json({limit : "50mb"}));
app.use(cors());

app.post("/postImage", postImageRouter)
app.get("/Content", ContentRouter)
app.delete("/Content", ContentRouter)
app.post("/Content", ContentRouter)

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})