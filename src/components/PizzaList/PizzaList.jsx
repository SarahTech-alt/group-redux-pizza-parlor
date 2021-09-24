import PizzaItem from '../PizzaItem/PizzaItem'
import {useSelector} from 'react-redux'
import './PizzaList.css'
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function PizzaList(props) {
    const history = useHistory();
    //use useSelector to access info from pizzaReducer 
    const reduxStore = useSelector(store => store);
    const [total, setTotal] = useState(0);
    const { pizzaReducer, pizzasSelectedReducer } = reduxStore;
    
    const navigateToForm = () => {
        history.push('/form');
    }

    return(
        <>
        {/* Use a .map to pass in all pizza information to PizzaItem */}
            <h2>Total Cost: ${total}</h2>
            <div className="big-wrapper">
                {pizzaReducer.map( pizza =>
                    <div className="pizza-item-wrapper" key={pizza.id}>
                        <PizzaItem
                            pizza={pizza}
                            total={total}
                            setTotal={setTotal}
                        />
                    </div>
                )}
            </div><br/>
            <button className="checkout-button" onClick={navigateToForm}>Checkout</button>
        </>
    )
}

export default PizzaList;