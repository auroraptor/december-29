import React,{ useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Message from "./Message";
import styles from "../pages/Profile/styles.module.scss";


const MessagesList = ({ messages }) => {
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages]);

  return (
    <ul className={styles.messages__list}>
    {messages?.map(message => (
      <Message
      key={message.id}
      {...message}
      />
    ))}
    <li ref={messagesEndRef} />
    </ul>
)}

MessagesList.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired
}

export default MessagesList
