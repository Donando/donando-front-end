import { createReducer } from 'utils/redux'

const SEARCH_BY_LOCATION = 'search_by_location';

const initialState = {

}

export function action_1(data) {
  return {
    type: SEARCH_BY_LOCATION,
    payload: {
      data
    }
  }
}

export default createReducer(initialState, {
  [SEARCH_BY_LOCATION]: (state, {data}) => {
    return data.text
  }
});
