import { Col, Card } from "antd"
import "../../Assets/Styles/futureItems.css";


const FutureItems = (props) => {

    const item = props.item;

    return (
        <>
            <Col span={4} className="colItems">
                {item.day}
                <Card
                    className='card2'
                    style={{ fontWeight: "bolder" }}
                    cover={<img alt="example" src={require(`../../Assets/Images/PartlyCloudy.png`)} height={70} width={70} />}
                >{item.temprature} °c
                </Card>

            </Col>
        </>
    )
}

export default FutureItems;