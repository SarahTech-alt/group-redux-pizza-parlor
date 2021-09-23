import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';



const bookList = (state = [], action) => {
    // TODO - set book list with data from server
    if (action.type === 'SET_BOOK_LIST') {
      return action.payload;
    }
    // No change to data
    return state;
  }

ReactDOM.render(<App />, document.getElementById('root'));
