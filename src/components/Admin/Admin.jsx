import axios from 'axios';
import { useState, useEffect } from 'react';


function Admin() {

    const [orderInfo, setOrderInfo] = useState([]);

    useEffect(() => {
        console.log('in useEffect')
        getOrderInfo();
    }, []);

    const getOrderInfo = () => {
        axios({
            method: 'GET',
            url: '/order'
        }).then(response => {
            setOrderInfo.push(response.data)
        }).catch(error => {
            console.log('There was an error getting the orders', error);
        })
    }


    return (
        <>
            <h1>Step 3: Checkout</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Time Order Placed</th>
                        <th>Type</th>
                        <th>Cost</th>
                    </tr>
                </thead>
                <tbody>
                    {orderInfo.map((item, i) =>
                    (<tr key={i}>
                        <td>{item.name}</td>
                        <td>{item.time}</td>
                        <td>{item.type}</td>
                        <td>{item.cost}</td>
                    </tr>)
                    )}
                </tbody>
            </table>
        </>
    )
}

export default Admin;