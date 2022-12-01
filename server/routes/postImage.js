const express = require("express");
const router = express.Router();
const Controller = require("../controllers/postImage")

router.route("/postImage").post(Controller.postController);

module.exports = router