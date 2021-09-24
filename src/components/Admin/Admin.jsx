import axios from 'axios';
import { useState, useEffect } from 'react';


function Admin() {

    // Create variable to hold retrieved data from the database
    const [orderInfo, setOrderInfo] = useState([]);

    // Makes getOrderInfo available on page load
    useEffect(() => {
        console.log('in useEffect')
        getOrderInfo();
    }, []);

    // Axios request to get the order information
    // stored in the database
    // put the retrieved information into orderInfo variable
    const getOrderInfo = () => {
        axios({
            method: 'GET',
            url: '/api/order'
        }).then(response => {
            setOrderInfo(response.data)
            console.log(response.data);
        }).catch(error => {
            console.log('There was an error getting the orders', error);
        })
    }


    return (
        <>
        {/* Create table to display information
        from order table */}
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
                    {/*Map over the objects in orderInfo
                    to display in the table*/}
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