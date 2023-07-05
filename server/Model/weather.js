const mongoose = require("mongoose");

const weatherSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    temprature: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    windSpeed: {
        type: String,
        required: true,
    },
    pressure: {
        type: String,
        required: true,
    },
    humidity: {
        type: String,
        required: true,
    }

},{
    timestamps: true
});

const Weather = mongoose.model("Weather",weatherSchema);

module.exports = Weather;