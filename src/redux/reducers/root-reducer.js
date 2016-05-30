import { combineReducers } from 'redux';

import filter from './filter-reducer'
import searchStatus from './search-status-reducer'
import demands from './demands-list-reducer'

export default combineReducers({
  filter,
  searchStatus,
  demands
})
