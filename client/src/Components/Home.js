import React, { useEffect, createContext, useState} from 'react';
import {Layout} from "antd";
import { Future,Present } from './subComponents';
import { getData, initialValue } from '../Utils/service';
import Data from '../Data/Mock.json'
import "../Assets/Styles/weatherContainer.css"

const DataContext = createContext();
const data = Data.weather


const Home = () => {

  const [values, setValues] = useState(initialValue);
  
  // useEffect(() => {
  //   const getWeather = async () => {
  //     const city = "chandigarh";
  //     try {
  //       const response = await getData(city);
  //       if (response.status === 201) {
  //         const responseData = response.data;
  //         const weatherData = {
  //             name: responseData.name,
  //             temprature: Math.round(responseData.temprature - 273.15),
  //             windSpeed: responseData.windSpeed,
  //             pressure: responseData.pressure,
  //             humidity: responseData.humidity,
  //             description: responseData.description,
  //         }
  //         setValues(weatherData);
  //       }

  //       else
  //         alert("City Not Found");

  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }
  //   getWeather();
  // },[])

  const {Content} = Layout;

  return (
    <>
      <Layout className="backGround">
        <Content className="weatherContent">
        <DataContext.Provider value={data}>
            <Present/>
            <Future/>
          </DataContext.Provider>
        </Content>
      </Layout>
    </>
  )
}

export {DataContext};

export default Home;