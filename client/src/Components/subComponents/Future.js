import { useContext } from 'react';
import { DataContext } from '../Home';
import FutureItems from './FutureItems';
import { Row } from "antd"

import "../../Assets/Styles/future.css"


const Future = () => {

    const items = useContext(DataContext);

    return (
        <>
            <Row gutter={16} className='itemsRow'>
                {
                    items.map((item, index) => (
                        <FutureItems
                            key={index}
                            item={item}
                        />
                    ))
                }
            </Row>
        </>
    )
}

export default Future;