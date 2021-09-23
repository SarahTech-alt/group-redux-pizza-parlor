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

  const orderReducer = (state = [], action) => {
    if (action.type === 'SET_ORDER_LIST'){
        return action.payload;
    }
    // No change to data
    return state;
  }

//store instance
const storeInstance = createStore(combineReducers({pizzaReducer, orderReducer}), applyMiddleware(logger),);


ReactDOM.render(
    <Provider store={storeInstance}>
        <App />
    </Provider>,
    document.getElementById('root')
);
