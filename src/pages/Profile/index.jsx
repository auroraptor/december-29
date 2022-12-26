import React from "react";
import styles from "./styles.module.scss";

function Profile() {
  return (
    <div className={styles.container}>
      <section id="main" className={styles.main}>
        <article id="card" className={styles.card}>
          Card
        </article>
        <section id="messages-list" className={styles.messages_list}>
          Messages list
        </section>
        <section id="new-message" className={styles.new_message}>
          New message
        </section>
      </section>
    </div>
  );
}

export default Profile;
