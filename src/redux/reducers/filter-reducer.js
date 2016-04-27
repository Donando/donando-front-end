import fetch from 'isomorphic-fetch'

import { createReducer } from 'utils/redux'
import { API } from 'utils/api'

import { loading_results,  results_loaded } from './search-status-reducer'
import { update_demands_list } from './demands-list-reducer'

const CHANGE_FILTER_LOCATION = 'change_filter_location';
const CHANGE_FILTER_TEXT = 'change_filter_text';


const initialState = {
  location: '',
  text: ''
}

export function change_filter_location(data) {
  console.log('data from FE ', data);
  return function(dispatch) {
    dispatch(loading_results());
    fetch(API.ROOT_PATH + API.END_POINTS.SEARCH_DEMANDS, {
      method: 'GET'
    })
      .then(function(response) {
        return response.json()
      }).then(function(json) {
        dispatch(update_demands_list(json));
        dispatch(results_loaded('loaded'));
      }).catch(function(err) {
        // Fix me: Have proper error logging
        console.log('some error happened in fetch. ', err);
        dispatch(results_loaded('failed'));
      });
  }
}

export function change_filter_text(data) {
  return {
    type: CHANGE_FILTER_TEXT,
    payload: {
      data
    }
  }
}

export default createReducer(initialState, {
  [CHANGE_FILTER_LOCATION]: (state, {data}) => ({location: data}),
  [CHANGE_FILTER_TEXT]: (state, {data}) => ({text: data})
});

