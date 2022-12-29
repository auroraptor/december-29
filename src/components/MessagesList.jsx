import React from "react"
import PropTypes from "prop-types"
import Message from "./Message"
import styles from "../pages/Profile/styles.module.scss";


const MessagesList = ({ messages }) => (
  <section id="messages-list" className={styles.messages}>
    <ul className={styles.messages__list}>
    {messages?.map(message => (
      <Message
      key={message.id}
      {...message}
      />
    ))}
    </ul>
  </section>
)

MessagesList.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
}

export default MessagesList