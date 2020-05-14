import { FETCH_CHARACTERS_START, FETCH_CHARACTERS_SUCCESS } from '../actions';

export const initialState = {
  isFetching: false,
  characters: [],
  error: '',
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHARACTERS_START:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_CHARACTERS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        characters: action.payload,
      };
    default:
      return state;
  }
};
