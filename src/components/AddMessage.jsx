import React from "react";
import PropTypes from "prop-types";
import styles from "../pages/Profile/styles.module.scss";
import store from "../store";
import { messageReceived } from "../store/actions/message";
import { getSendDateToString } from "../utils/dateToString";

const AddMessage = (props) => {
  let input;

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    if (input.value === "") return;

    props?.dispatch(input.value, "Me", getSendDateToString(new Date()));
    input.value = "";

    let fakeResponse;

    await fetch("https://api.kanye.rest")
      .then((res) => res.json())
      .then((data) => {
        fakeResponse = data.quote;
      })
      .catch((e) => console.err(e));

    setTimeout(() => {
      store.dispatch(
        messageReceived(
          `${fakeResponse}`,
          "Kanye",
          getSendDateToString(new Date())
        )
      );
    }, 1000);
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
        placeholder={"Введите текст"}
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
