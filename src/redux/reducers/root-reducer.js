import { combineReducers } from 'redux'

import child_1 from './child-reducer'
import demands from './demands'

export default combineReducers({
  child_1,
  demands
})