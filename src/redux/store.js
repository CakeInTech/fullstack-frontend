import { configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import greetingsReducer from './reducer';

const store = configureStore({
  reducer: greetingsReducer,
  middleware: [thunkMiddleware],
});

export default store;
