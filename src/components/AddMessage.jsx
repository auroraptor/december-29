import React from "react";
import PropTypes from "prop-types";
import styles from "../pages/Profile/styles.module.scss";

const AddMessage = (props) => {
  let input;

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props?.dispatch(input.value, "Me");
    input.value = "";
  };

  return (
    <form
      id="new-message"
      className={styles.new_message}
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        ref={(node) => {
          input = node;
        }}
        className={styles.input}
        placeholder={"Введите текст сообщения"}
      />
      <button type="submit" className={styles.button}>
        Отправить
      </button>
    </form>
  );
};

AddMessage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default AddMessage;
