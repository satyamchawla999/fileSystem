const axios = require("axios");
const Weather = require("../Model/weather");

module.exports.getWeatherData = async (req,res)=>{

    let city = req.body.city;
    city = city.toLowerCase()

    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a6720265fb7c6bc8c4f3afa18dc26ece`);
        if(response.data.cod === 200) {

            let {main,wind,name,weather} = response.data;

            const data = {
                name: name.toLowerCase(),
                temprature: main.temp,
                description:weather[0].description,
                windSpeed:wind.speed,
                pressure: main.pressure,
                humidity: main.humidity
            }

            let weatherData = await Weather.find({name:city});
            
            if(weatherData.length === 0) {
                weatherData = await Weather.create(data);
                weatherData = await Weather.find({name:city});
                return res.status(201).json(weatherData[0]);
            } else {
                weatherData = await Weather.updateOne({name:city},{...data});
                weatherData = await Weather.find({name:city});
                return res.status(201).json(weatherData[0]);
            }
        } else {
            let weatherData = await Weather.findOne({name:city});

            if(weatherData) {
                return res.status(201).json(weatherData);
            } else {
                res.statusMessage = "Data Not Found!"
                return res.status(204).end();
            } 
        }
        
        
    } catch(err) {
        res.statusMessage = "Unable To Fetch";
        return res.status(401).end();
    }
}