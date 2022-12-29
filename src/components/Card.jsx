import React from "react";
import PropTypes from "prop-types";
import styles from "../pages/Profile/styles.module.scss";

const Card = ({ title, description }) => (
  <article id="card" className={styles.card}>
    <div className={styles.card__container}></div>
  </article>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Card;
