export const getSendDateToString = (date) =>
  date.toLocaleDateString().replace(/\//g, ".") +
  " " +
  date.toLocaleTimeString().slice(0, -3);
