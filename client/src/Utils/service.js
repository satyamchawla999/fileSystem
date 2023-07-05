import axios from 'axios';
export const getData = (value)=>(axios.post("http://localhost:8000/weather/data", { city: value }))


export const initialValue = {
    name: "",
    temprature: "",
    windSpeed: "",
    pressure: "",
    humidity: "",
    description: "",
}