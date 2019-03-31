
import React from 'react';
import ReactDOM from 'react-dom';
import  {createStore} from 'redux';
import {Provider } from 'react-redux';
import './index.css';
import App from './components/App';
import postReducer from './reducers/postReducer';


const store = createStore(
  postReducer
);


ReactDOM.render(
  <Provider store={store}>
  	<App />
  </Provider>,document.getElementById('root')
);
