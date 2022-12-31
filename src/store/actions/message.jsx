import { ADD_MESSAGE, MESSAGE_RECEIVED } from "../types";

let nextMessageId = 0;

export const addMessage = (message, author, date) => ({
  type: ADD_MESSAGE,
  id: nextMessageId++,
  message,
  author,
  date,
});

export const messageReceived = (message, author, date) => ({
  type: MESSAGE_RECEIVED,
  id: nextMessageId++,
  message,
  author,
  date,
});
