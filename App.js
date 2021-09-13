import React from 'react';
import LoginNavigator from './src/navigation/LoginNavigator';
import { Provider } from 'react-redux';
import {createStore, combineReducers,applyMiddleware } from 'redux';
import cartReducer from './src/redux/cartReducer';
import loginReducer from './src/redux/loginReducer';
import listReducer from './src/redux/listReducer';
import { PersistGate } from 'redux-persist/integration/react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';
import thunkMiddleware from 'redux-thunk'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage
};

const rootReducer = combineReducers({
  cartReducer: persistReducer(persistConfig, cartReducer),
  loginReducer:persistReducer(persistConfig, loginReducer),
  listReducer: persistReducer(persistConfig, listReducer),
});
const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware) 
);
const persistor = persistStore(store);
const App = () => {
  return (
    <Provider store={store}>

      <PersistGate loading={null} persistor={persistor}>
    <LoginNavigator />
    </PersistGate>
    </Provider>
  )
}

export default App
