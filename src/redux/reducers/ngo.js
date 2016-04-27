import { createReducer } from 'utils/redux'

const SHOW_NGO = 'NGO';

const initialState = {
  name: 'this is the name',
  address: 'this is the address',
  direction: 'these are the directions',
  hours: 'these are the hours',
  phone: 'this is the phone number',
  website: 'this is the website'
}

export default createReducer(initialState, {
  [SHOW_NGO]: (state, {data}) => {
    return data
  }
});
