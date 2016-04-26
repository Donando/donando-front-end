import { createReducer } from 'utils/redux'

const ACTION_1 = 'action_1';

const initialState = {
  text: 'Hello, The initial state'
}

export function action_1(data) {
  return {
    type: ACTION_1,
    payload: {
      data
    }
  }
}

export default createReducer(initialState, {
  [ACTION_1]: (state, {data}) => {
    return data.text
  }
});
