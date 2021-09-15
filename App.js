import React from 'react';
import LoginNavigator from './src/navigation/LoginNavigator';
import {Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import cartReducer from './src/redux/cartReducer';
import loginReducer from './src/redux/loginReducer';
import listReducer from './src/redux/listReducer';
import {PersistGate} from 'redux-persist/integration/react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
import thunkMiddleware from 'redux-thunk';
//Create a configuration setting for Persistance with root as key folder and AsyncStorage as storage option
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};
//Make all the reducers persistable, and combine them into 1 composite reducer.
const rootReducer = combineReducers({
  cartReducer: persistReducer(persistConfig, cartReducer),    //Reducer for Cart
  loginReducer: persistReducer(persistConfig, loginReducer),  //Reducer for Username
  listReducer: persistReducer(persistConfig, listReducer),    //Reducer for list of items
});
//Create a Redux store which will house all the reducers for actions, along with delayed functions(using thunkMiddleware)
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
//Make the store persistable, so that it is not needed to be repopulated on restarting the app.
const persistor = persistStore(store);
const App = () => {
  return (
    //Wrap the root component with Provider, to make the Redux store(created above) and all the reducers available for use throughout all the components.
    //PersistGate is used to delay the rendering, until the persistor(persisted state) is retrieved and made available for use in current render
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>  
        <LoginNavigator />
      </PersistGate>
    </Provider>
  );
};

export default App;
