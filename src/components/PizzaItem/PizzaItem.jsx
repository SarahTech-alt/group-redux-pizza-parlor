import { useSelector, useDispatch } from 'react-redux';
import React, { useState, useEffect } from 'react';

function PizzaItem(props){
    const dispatch = useDispatch();
    const [addPizzaCheck, setAddPizzaCheck] = useState(true);

    const addPizzaToOrder = (event) => {
        event.preventDefault;
        console.log(props.pizza)
        dispatch({type: 'ADD_PIZZA', payload: props.pizza})
        setAddPizzaCheck(false);
        console.log(props.total)
        let newTotal = Number(props.total)
        newTotal += Number(props.pizza.price);
        props.setTotal(newTotal);
    }
    const removePizzaFromOrder = (event) => {
        event.preventDefault;
        dispatch({type: 'REMOVE_PIZZA', payload: props.pizza})
        setAddPizzaCheck(true);
        let newTotal = Number(props.total)
        newTotal -= Number(props.pizza.price);
        props.setTotal(newTotal);
    }
    return(
        <>
            <div className="img-wrapper">
                <img src={props.pizza.image_path}></img>
                <h2 className="pizzas">{props.pizza.name}</h2>
                <p>{props.pizza.description}</p>
                <p>${props.pizza.price}</p>
                {addPizzaCheck ? <button className="add" onClick={addPizzaToOrder}>Add To Cart</button> : 
                <button onClick={removePizzaFromOrder}>Remove From Cart</button>}
            </div>
        </>
    )
}

export default PizzaItem;