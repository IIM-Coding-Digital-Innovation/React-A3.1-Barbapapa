import { createStore } from 'redux';
// import { configureStore } from '@reduxjs/toolkit'
import counter from './reducers/counter.js';

export default createStore(counter);