const express = require("express");
const router = express.Router();
const Controller = require("../controllers/Content")

router.route("/Content")
        .get(Controller.getController)
        .post(Controller.postController)
        .delete(Controller.deleteController);

module.exports = router