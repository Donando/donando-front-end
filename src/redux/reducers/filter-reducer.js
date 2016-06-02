import fetch from 'isomorphic-fetch'

import { createReducer } from 'utils/redux'
import { API } from 'utils/api'

import { results_loading,  results_loaded, set_notification_message } from './common-reducer'
import { update_demands_list } from './demands-list-reducer'

const CHANGE_FILTER_LOCATION = 'change_filter_location';
const CHANGE_FILTER_ITEM = 'change_filter_item';


const initialState = {
  location: '',
  item: ''
}

export function load_data(location = '', item = '') {
  return function(dispatch) {
    dispatch(results_loading());
    dispatch(change_filter_location(location));
    dispatch(change_filter_item(item));
    let queryParams = '?' + API.QUERY_PARAMS.ADDRESS_SEARCH + '=' + location + '&' + API.QUERY_PARAMS.ITEM_SEARCH + '=' + item;
    fetch(API.ROOT_PATH + API.END_POINTS.SEARCH_DEMANDS + queryParams, {
      method: 'GET'
    })
      .then(function(response) {
        return response.json()
      }).then(function(json) {
        dispatch(update_demands_list(json));
        dispatch(results_loaded('loaded'));
      }).catch(function(err) {
        dispatch(set_notification_message({data: err}));
        dispatch(results_loaded('loaded'));
      });
  }
}

export function change_filter_location(data) {
  return {
    type: CHANGE_FILTER_LOCATION,
    payload: {
      data
    }
  }
}

export function change_filter_item(data) {
  return {
    type: CHANGE_FILTER_ITEM,
    payload: {
      data
    }
  }
}

export default createReducer(initialState, {
  [CHANGE_FILTER_LOCATION]: (state, {data}) => ({location: data}),
  [CHANGE_FILTER_ITEM]: (state, {data}) => ({text: data})
});

