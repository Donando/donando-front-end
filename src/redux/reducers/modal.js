import { createReducer } from 'utils/redux'

const OPEN_MODAL = 'OPEN_MODAL';
const CLOSE_MODAL = 'CLOSE_MODAL';

const initialState =  false;

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
  [OPEN_MODAL]: () => {
    return true;
  },
  [CLOSE_MODAL]: () => {
    return false;
  }
});
