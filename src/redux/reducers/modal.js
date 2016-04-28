import { createReducer } from 'utils/redux'

const OPEN_MODAL = 'OPEN_MODAL';
const CLOSE_MODAL = 'CLOSE_MODAL';

const initialState =  {
  displayModal: false,
  demands: [{title: 'demand 1'}, {title: 'demand 2'}, {title: 'demand 3'}],
  ngo: {
    name: 'this is the name',
    address: 'this is the address',
    direction: 'these are the directions',
    hours: 'these are the hours',
    phone: 'this is the phone number',
    website: 'this is the website'
  }
};

export function openModal() {
  return {
    type: OPEN_MODAL
  }
}

export function closeModal() {
  return {
    type: CLOSE_MODAL
  }
}

export default createReducer(initialState, {
  [OPEN_MODAL]: (state) => {
    return {
      ...state,
      displayModal: true
    };
  },
  [CLOSE_MODAL]: (state) => {
    return {
      ...state,
      displayModal: false
    };
  }
});
