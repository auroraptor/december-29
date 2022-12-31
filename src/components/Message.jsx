import React from "react";
import PropTypes from "prop-types";
import styles from "../pages/Profile/styles.module.scss";

const Message = ({ message, author, date }) => {
  return (
    <div
      className={`${styles.message} ${
        author !== "Me" && styles.message_user_res
      }`}
    >
      {message}
      <div
        className={`${styles.date} ${author !== "Me" && styles.date_user_res}`}
      >
        {date}
      </div>
    </div>
  );
};

Message.propTypes = {
  message: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default Message;
