import { CARD_RECEIVED, UPDATE_CARD } from "../types";

const initialState = {
  title: "",
  description: "",
  image: "",
  id: 0,
  loading: true,
};

const card = (state = initialState, action) => {
  switch (action.type) {
    case CARD_RECEIVED:
      return {
        ...state,
        ...action.payload,
        loading: false,
      };
    case UPDATE_CARD:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default card;
