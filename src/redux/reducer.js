import { FETCH_RANDOM_GREETING_SUCCESS } from '../action/action';

const initialState = {
  message: null
};

const greetingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RANDOM_GREETING_SUCCESS:
      return {
        ...state,
        message: action.payload
      };
    default:
      return state;
  }
};

export default greetingsReducer;
