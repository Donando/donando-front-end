import { createReducer } from 'utils/redux'

const SHOW_DEMANDS = 'SHOW_DEMANDS';

const initialState = {
  demands: [{title: 'demand 1'}, {title: 'demand 2'}, {title: 'demand 3'}]
}

export function showDemands(data) {
  return {
    type: SHOW_DEMANDS,
    payload: {
      data
    }
  }
}

export default createReducer(initialState, {
  [SHOW_DEMANDS]: (state, {data}) => {
    return data
  }
});
