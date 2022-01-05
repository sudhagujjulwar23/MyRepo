
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Provider} from 'react-redux';
import { createStore, combineReducers } from 'redux';
import categoryReducer from './src/store/reducers/categories';
import Main from './src/Main';

const rootReducer = combineReducers({
  categoryReducer: categoryReducer
})

const store = createStore(rootReducer);

const App = () => {
  return (
   <Provider store={store}>
      <Main/>
   </Provider>
  )
}

export default App;