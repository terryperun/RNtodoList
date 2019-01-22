import types from './types';

const initialState = {
  items: [{ task: 'buy milk', status: false }],
  isLoading: false,
  error: null,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case types.ADD_TO_COLLECTION_START: {
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    }
    case types.ADD_TO_COLLECTION_OK: {
      return {
        ...state,
        isLoading: false,
        items: [...state.items, action.payload],
      };
    }
    case types.ADD_TO_COLLECTION_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
    default:
      return state;
  }
}
export default reducer;
