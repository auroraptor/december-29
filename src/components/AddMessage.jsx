import React from 'react';
import PropTypes from 'prop-types';
import styles from "../pages/Profile/styles.module.scss";


const AddMessage = (props) => {
  let input

  return (
    <section id="new-message" className={styles.new_message}>
      <input
        onKeyPress={(e) => {
        if (e.key === 'Enter') {
          props?.dispatch(input.value, 'Me')
          input.value = ''
        }
      }}
        type="text"
        ref={(node) => {
        input = node
      }}
      className={styles.input}
      placeholder={"Введите текст сообщения"}
      />
      {/* <button className={styles.button} onClick={
        (e) => {
            props?.dispatch(input.value, 'Me')
            input.value = ''
        }}
          ref={(node) => {
          input = node
        }
      }>Отправить</button> */}
    </section>
  )
}

AddMessage.propTypes = {
  dispatch: PropTypes.func.isRequired
}

export default AddMessage;