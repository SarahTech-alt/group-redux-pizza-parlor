import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';

//import from redux
import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

const pizzaReducer = (state = [], action) => {
    // Sets book list with data from server
    if (action.type === 'SET_PIZZA_LIST') {
      return action.payload;
    }
    // No change to data
    return state;
  }

//order reducer - object b/c only 1 order at a time
const orderReducer = (state = {}, action) => {
    //TODO - set orderReducer
    if (action.type === 'ADD_ORDER_INFO') {
        return action.payload;
    }
    return state;
}

const pizzasSelectedReducer = (state = [], action) => {
    if (action.type === 'ADD_PIZZA') {
        return [...state, action.payload]
    } else if (action.type === 'REMOVE_PIZZA') {
        for (let i = 0; i < state.length; i++){
            console.log(state[i])
            if (state[i].id === action.payload.id){
                let newArray = [...state];
                newArray.splice(i, 1);
                return newArray;
            }
        }
    }
    if (action.type === 'GET_PIZZAS'){
        return state;
    }
    return state;
}


//store instance
const storeInstance = createStore(combineReducers({pizzaReducer, orderReducer, pizzasSelectedReducer}), applyMiddleware(logger),);


ReactDOM.render(
    <Provider store={storeInstance}>
        <App />
    </Provider>,
    document.getElementById('root')
);