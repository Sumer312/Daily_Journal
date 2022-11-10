const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 8000;
let title = "", body = "";
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors())

app.post("/postContent", async(req, res) => {
    title = await req.body.title;
    body = await req.body.body;
})

app.get("/view", (req, res) => {
    res.write(title);
    res.write(body);
    res.end();
})

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
})