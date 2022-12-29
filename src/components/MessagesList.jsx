import React from "react"
import PropTypes from "prop-types"
import Message from "./Message"

const MessagesList = ({ className, messages }) => (
  <section id="messages-list" className={className}>
    <ul>
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