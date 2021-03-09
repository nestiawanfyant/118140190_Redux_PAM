import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Order from './page/order'

// global state
const globalstate = {
  totalOrder: 3,
  data: {}
}

// reducer  
const rootReducer = (state = globalstate, action) => {

  if(action.type === 'INSERT_ORDER'){
      return {
        ...state, 
        totalOrder: state.totalOrder + 1,
      }
  }

  if(action.type === 'DELETE_ORDER') {
    if(state.totalOrder > 0) {
      return {
        ...state,
        totalOrder: state.totalOrder - 1,
      }
    } else  {
      return {
        ...state,
        totalOrder: 0
      }
    }
  }

  return state;
}

// store
const createStores = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={createStores}>
      <Order />
    </Provider>
  );
}
