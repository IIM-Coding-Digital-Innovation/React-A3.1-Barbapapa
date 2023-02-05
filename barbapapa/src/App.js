
import "./App.scss";
import List from "./Components/List";
// import Test from "./Components/Test";


import React from 'react';
import { Provider } from 'react-redux';
import store from './store/index';



const App = () => {
  

// const counter = 77;
// const count = state.count;

  console.log(store.getState().count)
  
  store.getState().count = 2

  console.log(store.getState().count)

  // console.log(store.getState().list)

  return (
    <Provider store={store}>
  <div> <List/> </div>
  </Provider>
  );
}

export default App;