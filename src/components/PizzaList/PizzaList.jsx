import PizzaItem from '../PizzaItem/PizzaItem'
import {useSelector} from 'react-redux'
import './PizzaList.css'
import React, { useState, useEffect } from 'react';

function PizzaList(props) {
    //use useSelector to access info from pizzaReducer 
    const reduxStore = useSelector(store => store);
    const [total, setTotal] = useState(0)
    const { pizzaReducer, pizzasSelectedReducer} = reduxStore;
    
    return(
        <>
        {/* Use a .map to pass in all pizza information to PizzaItem */}
            <h2>Total Cost: ${total}</h2>
            <div className="big-wrapper">
                {pizzaReducer.map( pizza =>
                    <div className="pizza-item-wrapper" key={pizza.id}>
                        <PizzaItem
                            pizza={pizza}
                        />
                    </div>
                )}
            </div>
        </>
    )
}

export default PizzaList;