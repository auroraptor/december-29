import { ADD_MESSAGE, MESSAGE_RECEIVED } from "../types";

const messages = (state = [], action) => {
  switch (action.type) {
    case ADD_MESSAGE:
    case MESSAGE_RECEIVED:
      return state.concat([
        {
          message: action.message,
          author: action.author,
          date: action.date,
          id: action.id,
        },
      ]);
    default:
      return state;
  }
};

export default messages;
