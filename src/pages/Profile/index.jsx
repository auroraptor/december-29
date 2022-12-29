import React from "react";
import {AddMessage} from "../../containers/AddMessage";
import {MessagesList} from "../../containers/MessagesList";
import {Card} from "../../containers/Card";
import styles from "./styles.module.scss";

function Profile() {
  return (
    <div className={styles.container}>
      <section id="main" className={styles.main}>
        <Card />
        <MessagesList className={styles.messages_list} ></MessagesList>
        <AddMessage className={styles.new_message}></AddMessage>
      </section>
    </div>
  );
}

export default Profile;
