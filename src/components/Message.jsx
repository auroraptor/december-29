import React from "react"
import PropTypes from "prop-types"
import styles from "../pages/Profile/styles.module.scss";


const Message = ({ message, author, date = "dd.mm.yyyy 00:00"}) => (
  <div className={`${styles.message} ${author === 'Me' && styles.me}`}>
    <i>{author}</i>: {message}
    <div className={styles.date}>{date.toString()}</div>
  </div>
)

Message.propTypes = {
  message: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
}

export default Message