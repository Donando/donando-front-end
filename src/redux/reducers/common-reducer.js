import { createReducer } from 'utils/redux'

const RESULTS_LOADING = 'results_loading';
const RESULTS_LOADED = 'results_loaded';
const SET_NOTIFICATION_MESSAGE = 'set_notification_message';

const initialState = {
  loadingStatus: 'loaded',
  notificationMessage: 'Keine Ergebnisse gefunden!'
}

// Helper function to return the current loading status
let getLoadingStatus = (state, {data}) => ({loadingStatus: data || state.loaded});

export function results_loading() {
  return {
    type: RESULTS_LOADING,
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

export function set_notification_message(data) {
  return {
    type: SET_NOTIFICATION_MESSAGE,
    payload: {
      data
    }
  }
}

export default createReducer(initialState, {
  [RESULTS_LOADING]: getLoadingStatus,
  [RESULTS_LOADED]: getLoadingStatus,
  [SET_NOTIFICATION_MESSAGE]: (state, {data}) => ({notificationMessage: data.message})
});
