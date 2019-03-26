
import React from 'react';
import ReactDOM from 'react-dom';
import  {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import {Provider } from 'react-redux';
import './index.css';
import App from './App';
import postReducer from './reducers/postReducer';


const store = createStore(
  postReducer,
  applyMiddleware(logger)
);


ReactDOM.render(
  <Provider store={store}>
  	<App />
  </Provider>,document.getElementById('root')
);
