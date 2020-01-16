import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import HomeScreen from './screens/HomeScreen'
import reducer from './reducer'
import thunk from 'redux-thunk'

const store = createStore(reducer, applyMiddleware(thunk))

const App = () => (
  <Provider store={store}>
    <HomeScreen />
  </Provider>
)

export default App;