import React from "react"
import PropTypes from "prop-types"

const Message = ({ message, author, date = new Date() }) => (
  <p>
    <i>{author}</i>: {message}
    <i>{date.toString()}</i>
  </p>
)

Message.propTypes = {
  message: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
}

export default Message