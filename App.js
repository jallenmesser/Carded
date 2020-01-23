import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import HomeScreen from './screens/HomeScreen'
import reducer from './reducer'
import thunk from 'redux-thunk'
import AppNavigator from './navigator/AppNavigator'

const store = createStore(reducer, applyMiddleware(thunk))
console.disableYellowBox = true;

const App = () => (
  <Provider store={store}>
    <AppNavigator />
  </Provider>
)

export default App;