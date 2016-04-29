export function createReducer(initialState, reducerMap) {
  return (state = initialState, action = {}) => {
    const reducer = reducerMap[action.type];
    const getNewState = (state, action) => {
      if(Array.isArray(state)) {
        return [...reducer(state, action.payload)];
      }
      return (typeof state === 'object') ? ({...state, ...reducer(state, action.payload)}): reducer(state, action.payload);
    }
    return reducer? getNewState(state, action): state;
  }
}