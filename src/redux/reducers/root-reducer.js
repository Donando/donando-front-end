import { combineReducers } from 'redux';

import filter from './filter-reducer'
import common from './common-reducer'
import demands from './demands-list-reducer'

export default combineReducers({
  filter,
  common,
  demands
})
