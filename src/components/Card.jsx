import React from "react";
import PropTypes from "prop-types";

const Card = ({ styles, title, description }) => (
  <article id="card" className={styles.card}>
    
  </article>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Card;
