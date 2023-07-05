const express = require("express");
const path = require("path");
const fs = require("fs");
const router = express.Router();
const userController = require("../Controllers/userController")


router.get("/", (req, res) => {
    try {
            return res.status(200).send("Hello")
    }
    catch {
        console.log(err);
    }
})

router.use('/users',require('./users'));
router.use('/weather',require('./weather'));

router.post("/checkUser",userController.checkUser);
router.post("/addUser",userController.addUser);

module.exports = router;
