import { ACTION_TYPES } from "../constants/constants";

export const initialState = {
  isLoading: false,
  post: {},
  error: false,
};

export const postReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_LOADING:
      return { ...state, isLoading: true };
    case ACTION_TYPES.FETCH_SUCCESS:
      return { ...state, isLoading: false, post: action.payload };
    case ACTION_TYPES.FETCH_ERROR:
      return { ...state, error: true, isLoading: false, post: {} };

    default:
      return state;
  }
};
