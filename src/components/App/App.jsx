import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import PizzaList from '../PizzaList/PizzaList'
import Admin from '../Admin/Admin'
import { useSelector, useDispatch } from 'react-redux'



function App() {
  const dispatch = useDispatch();  
  //Axios Get request for pizzas
  //Dispatch pizzas to redux (within the .then in the get request)
  useEffect(() => {
    getPizzas();
  }, []);

  const getPizzas = () => {
    axios.get('/api/pizza').then( response => {
      console.log(response.data);
      dispatch({ type: 'SET_PIZZA_LIST', payload: response.data, });
    }).catch( error => {
      console.log('error in getPizzas', error)
    })
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>

      <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p>
  
    </div>
  );
}

export default App;
