import { useEffect, useState } from 'react';
import { Row, Col, Card, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { getData, initialValue } from '../../Utils/service';
import '../../Assets/Styles/present.css'

const Present = () => {
    
    const [values, setValues] = useState(initialValue);

    const [found,setFound] = useState(true);

    const [click,setClick] = useState(true);

    useEffect(()=>{
        console.log(values);
    },[values])

    // useEffect(() => {
    //     const getWeather = async () => {
    //       const city = "chandigarh";
    //       try {
    //         const response = await getData(city);
    //         if (response.status === 201) {
    //           const responseData = response.data;
    //           const weatherData = {
    //               name: responseData.name,
    //               temprature: Math.round(responseData.temprature - 273.15),
    //               windSpeed: responseData.windSpeed,
    //               pressure: responseData.pressure,
    //               humidity: responseData.humidity,
    //               description: responseData.description,
    //           }
    //           setFound(true);
    //           setValues(weatherData);
    //         }
    
    //         else
    //           alert("City Not Found");
    
    //       } catch (err) {
    //         console.log(err);
    //         setFound(false);
    //       }
    //     }
    //     getWeather();
    //   },[click])

    const handleSubmit = async (value) => {
        try {
            const response = await getData(value);

            if (response.status === 201) {
                const responseData = response.data;
                const weatherData = {
                    name: responseData.name,
                    temprature: Math.round(responseData.temprature - 273.15),
                    windSpeed: responseData.windSpeed,
                    pressure: responseData.pressure,
                    humidity: responseData.humidity,
                    description: responseData.description,
                }
                setFound(true)
                setValues(weatherData)
            }

            else
                alert("City Not Found");

        } catch (err) {
            console.log(err);
            setFound(false)
        }
    }

    return (
        <>
            <Row className='row'>
                <Col className="col" span={12}>
                    {found ? <>
                        {values?.name}
                    </> : <>
                        "Not Found!"
                    </>}
                    
                </Col>
                <Col span={2}></Col>
                <Col className="col" span={10}>
                    <Input onPressEnter={(value) => handleSubmit(value.target.value)} className="input" size="large" placeholder="Search Location" prefix={<SearchOutlined />} />
                </Col>
            </Row>

            <Row>
                <Col span={8}>
                    <Card
                        className='card'
                        style={{ fontWeight: "bolder" }}
                        cover={<img alt="example" src={require('../../Assets/Images/PartlyCloudy.png')} height={180} />}
                    >
                        {values?.description}
                    </Card>
                </Col>

                <Col span={8} >
                    <Card className='card middle' >
                        {values?.temprature} °c
                    </Card>
                </Col>

                <Col span={8}>
                    <Card className='card last' >
                        Wind: {values?.windSpeed} kmph
                        Humidity: {values?.humidity} mm
                        Pressure: {values?.pressure} mb
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default Present;