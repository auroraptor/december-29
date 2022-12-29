import React from "react"
import PropTypes from "prop-types"
import styles from "../pages/Profile/styles.module.scss";


const Message = ({ message, author, date = new Date() }) => (
  <div className={styles.message}>
    <i>{author}</i>: {message}
    <i>{date.toString()}</i>
  </div>
)

Message.propTypes = {
  message: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
}

export default Message