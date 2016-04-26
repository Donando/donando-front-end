import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import root_reducer from './reducers/root-reducer'

export default createStore(root_reducer, {child_1: 'This is the default initial state'}, compose(
  applyMiddleware(thunk)
))