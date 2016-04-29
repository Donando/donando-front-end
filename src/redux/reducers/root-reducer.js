import { combineReducers } from 'redux';

import child_1 from './child-reducer'
import filter from './filter-reducer'
import searchStatus from './search-status-reducer'
import demands from './demands-list-reducer'

// import modal from './modal';

export default combineReducers({
  child_1,
  filter,
  searchStatus,
  demands
})
