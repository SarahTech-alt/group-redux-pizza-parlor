//import useSelector to access reduxStore
import { useSelector } from "react-redux";
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {useHistory} from 'react-router-dom';


function Checkout() {
    const history = useHistory();
    //declare array pizzaOrder from store
    const pizzaOrder = useSelector(store => store.pizzasSelectedReducer);
    //declare object orderInfo from store
    const orderInfo = useSelector(store => store.orderReducer);

    const [pizzaArray, setPizzaArray] = useState([])
    //calculates order total
    const calcTotal = () => {
        let total = 0;
        for (let item of pizzaOrder) {
            total += parseFloat(item.price);
        }
        return total;
    }
    useEffect(() => {
        pizzasInOrder();
    }, []);
    const pizzasInOrder = () => {
        let thePizzas = [];
        for (let pizza of pizzaOrder){
            let newPizza = {
                  id: pizza.id,
                  quantity: "1",
              }
            thePizzas.push(newPizza);
       }
       setPizzaArray(thePizzas);
    }
    //order total to be displayed on DOM
    const orderTotal = calcTotal();

    const submitOrder = () => {
        //post here
        console.log('in submit order')
        console.log(orderInfo.name)
        axios({
            method: 'POST',
            url: '/api/order',
            data: {
                customer_name: orderInfo.name,
                street_address: orderInfo.address,
                city: orderInfo.city,
                zip: orderInfo.zip,
                type: orderInfo.method,
                total: orderTotal,
                pizzas: pizzaArray,
            }
        }).then(response => {
            console.log('POST was successful');
            history.push('/pizzas');
        }).catch(error => {
            console.log('There was an error getting the orders', error);
        })
    }


return (
    <>
        <h1>Step 3: Checkout</h1>
        <p>{orderInfo.name}</p>
        <p>{orderInfo.address}</p>
        <p>{orderInfo.city}, {orderInfo.zip}</p>
        <p>{orderInfo.method}</p>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Cost</th>
                </tr>
            </thead>
            <tbody>
                {pizzaOrder.map((item, i) =>
                (<tr key={i}>
                    <td>{item.name}</td>
                    <td>${item.price}</td>
                </tr>)
                )}
            </tbody>
        </table>
        <p>Total: $<span>{orderTotal}</span></p>
        <button onClick={submitOrder}>Submit</button>
    </>
);
}

export default Checkout;