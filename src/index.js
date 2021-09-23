import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'; 
import logger from 'redux-logger';




const pizzaList = (state = [], action) => {
    // TODO - set Pizza list with data from server
    if (action.type === 'SET_PIZZA_LIST') {
      return action.payload;
    }
    // No change to data
    return state;
  }

  const orderList = (state = [], action) => {
    if (action.type === 'SET_ORDER_LIST'){
        return action.payload;
    }
    // No change to data
    return state;
  }

ReactDOM.render(<App />, document.getElementById('root'));
