import { CARD_RECEIVED, UPDATE_CARD } from "../types";

export const cardReceived = (title, description, image, id) => ({
  type: CARD_RECEIVED,
  title,
  description,
  image,
  id,
});

export const updateCard = (data) => {
  return async (dispatch) => {
      dispatch({
          type: UPDATE_CARD,
          payload: data,
      });
  };
};
