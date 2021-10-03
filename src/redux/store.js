import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger'

import  reducer  from './reducer';

//---------------------------------через toolkit---------------------------------

const middleware = [...getDefaultMiddleware(), logger];

export const store = configureStore({
  reducer,
  middleware,
  devtools: process.env.NODE_ENV !== 'development'
  
});


//-----------------------------------через import { createStore } from 'redux';----------------------------------------------------

// export const store = createStore(
//   reducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
// );