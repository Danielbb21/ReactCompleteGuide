import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';
// import ProductsProvider from './context/products-context';
import './index.css';
import App from './App';
import productReducer from './store/reducers/products';
import ProductProvider from './context/products-context';
import configureStore from './hooks-store/product-store';

const rootReducer = combineReducers({
  shop: productReducer
});
configureStore();
const store = createStore(rootReducer);

ReactDOM.render(

  <BrowserRouter>
    <App />
  </BrowserRouter>
  ,
  document.getElementById('root')
);
