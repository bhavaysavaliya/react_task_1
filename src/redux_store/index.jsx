import { configureStore } from '@reduxjs/toolkit';
import inputtext_of_component_b from './reducers';

// Using configureStore to create store with name app. 
// We can also use createStore from 'react-redux' but it is deprecated. So, better to use configureStore.
const store = configureStore({

  reducer: {
    inputtext_of_component_b
  }
});

export default store;