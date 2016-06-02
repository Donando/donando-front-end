import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import root_reducer from './reducers/root-reducer'

export default createStore(root_reducer, compose(
  applyMiddleware(thunk)
))