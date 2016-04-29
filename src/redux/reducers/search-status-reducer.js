import { createReducer } from 'utils/redux'

const LOADING_RESULTS = 'loading_results';
const RESULTS_LOADED = 'loading_results';

const initialState = 'loaded';

// Helper function to return the current loading status
function getLoadingStatus(state, status) {
  return (status ? status.data: state);
}

export function loading_results() {
  return {
    type: LOADING_RESULTS,
    payload: {
      data: 'loading'
    }
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
  [LOADING_RESULTS]: getLoadingStatus,
  [RESULTS_LOADED]: getLoadingStatus
});
