import { createReducer } from 'utils/redux'

const LOADING_RESULTS = 'loading_results';
const RESULTS_LOADED = 'loading_results';

const initialState = 'loaded';

export function loading_results() {
  return {
    type: LOADING_RESULTS
  }
}

export function results_loaded(data) {
  return {
    type: RESULTS_LOADED,
    payload: {
      data
    }
  }
}

export default createReducer(initialState, {
  [LOADING_RESULTS]: (state) => {
    // Fix me: change this into cost
    return 'loading';
  },
  [RESULTS_LOADED]: (state, status) => {
    return status ? status.data: state;
  }
});
