import { createReducer } from 'utils/redux'

const UPDATE_DEMANDS_LIST = 'update_demands_list';

const initialState = [];

export function update_demands_list(data) {
  return {
    type: UPDATE_DEMANDS_LIST,
    payload: {
      data
    }
  }
}

export default createReducer(initialState, {
  [UPDATE_DEMANDS_LIST]: (state, {data}) => (data)
});
