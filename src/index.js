import React from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import logger from 'redux-logger';
//import from redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
//storeinstance
const storeInstance = createStore(combineReducers({pizzaReducer, orderReducer}), applyMiddleware(logger),);


//pizza reducer 
const pizzaReducer = (state = [], action) => {
    //TODO - set pizzaReducer with pizza data from DB
    return state;
}

//order reducer - object b/c only 1 order at a time
const orderReducer = (state = {}, action) => {
    //TODO - set orderReducer
    return state;
}

//store instance



ReactDOM.render(
    <Provider store={storeInstance}>
        <App />
    </Provider>,
    document.getElementById('root')
);
