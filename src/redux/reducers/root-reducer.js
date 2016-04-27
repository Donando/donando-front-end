import { combineReducers } from 'redux';

import child_1 from './child-reducer';
import demands from './demands';
import modal from './modal';

export default combineReducers({
  child_1,
  demands,
  modal
})