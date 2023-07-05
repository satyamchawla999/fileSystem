const express = require("express");
const router = express.Router();

const weatherController = require("../Controllers/weatherController")


router.post('/data',weatherController.getWeatherData);

module.exports=router;