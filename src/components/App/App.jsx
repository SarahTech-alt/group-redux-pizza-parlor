import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import PizzaList from '../PizzaList/PizzaList.jsx'
import OrderForm from '../OrderForm/OrderForm.jsx'
import PizzaItem from '../PizzaItem/PizzaItem';
import Admin from '../Admin/Admin'
import { useSelector, useDispatch } from 'react-redux'
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Checkout from '../Checkout/Checkout';



function App() {
  const dispatch = useDispatch();
  //Axios Get request for pizzas
  //Dispatch pizzas to redux (within the .then in the get request)
  useEffect(() => {
    getPizzas();
  }, []);

  const getPizzas = () => {
    axios.get('/api/pizza').then(response => {
      console.log(response.data);
      dispatch({ type: 'SET_PIZZA_LIST', payload: response.data, });
    }).catch(error => {
      console.log('error in getPizzas', error)
    })
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
      <Router>
        <ul>
          <li>
            <Link to="/pizzas">Pizzas</Link>
          </li>
          <li>
          <Link to='/checkout'>Checkout</Link>
          </li>
          <li>
          <Link to="/form">Form</Link>
          </li>
        </ul>
        <Route path='/checkout'>
          <Checkout />
        </Route>
        <Route path='/pizzas'>
          <PizzaList />
        </Route>
        <Route path='/form'>
          <OrderForm />
        </Route>
        <Route path='/admin'>
          <Admin />
        </Route>
      </Router>
      {/* <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p> */}

    </div>
  );
}

export default App;