const express = require("express");
const path = require("path");
const fs = require("fs");
const router = express.Router();
const userController = require("../Controllers/userController")


router.get("/", (req, res) => {
    try {
        fs.readFile(path.join(__dirname, "../Data", "/user.json"), "utf-8", (err, data) => {
            return res.status(200).send(data)
        });
    }
    catch {
        console.log(err);
    }
})

router.post("/checkUser",userController.checkUser);
router.post("/addUser",userController.addUser);

module.exports = router;
