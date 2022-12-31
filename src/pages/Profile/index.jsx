import React from "react";
import {AddMessage} from "../../containers/AddMessage";
import {MessagesList} from "../../containers/MessagesList";
import {Card} from "../../containers/Card";
import styles from "./styles.module.scss";
import { Provider } from "react-redux";
import store from "../../store";
import { messageReceived } from "../../store/actions/message";
import { fakeMessages, fakeDate } from "../../constants/fakeData";

const getHardCode = () => {
  for (let i = 0; i < fakeMessages.length; i++) {
    store.dispatch(
      messageReceived(
      fakeMessages[i],
      `${i % 2 === 0 ? "Pokémon" : "Me" }`,
      fakeDate,
      )
    );
  }
}

getHardCode();


function Profile() {
  return (
    <Provider store={store}>
    <div className={styles.container}>
      <section id="main" className={styles.main}>
        <Card />
        <MessagesList/>
        <AddMessage />
      </section>
    </div>
    </Provider>

  );
}

export default Profile;
