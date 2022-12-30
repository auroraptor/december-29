import React from "react";
import PropTypes from "prop-types";
import { FiX } from "react-icons/fi";
import styles from "../pages/Profile/styles.module.scss";

const Card = ({ title="Входящий запрос", description="Описание товара, характеристики будут тут", image="https://openmoji.org/data/color/svg/1F529.svg" }) => (
  <article id="card" className={styles.card}>
    <div className={styles.card__container}>
      <div className={styles.card__row}>
        <img src={image} alt="Изображение товара" className={styles.image}></img>
        <div className={styles.card__description}>
          <h4 className={styles.card__title}>{title}</h4>
          <p className={styles.card__name}>{description}</p>
        </div>
        <button type="button" onClick={() => alert('что-то происходит')} className={styles.card__button}>
          <FiX/>Удалить ответ</button>
      </div>
      <div className={styles.card__row}>
        <table>
          <thead>
            <tr>
              <th className={styles.th}>Цена</th>
              <th className={styles.th}>Количество</th>
              <th className={styles.th}>Состояние</th>
              <th className={styles.th}>Дата доставки</th>
              <th className={styles.th}>Адрес доставки</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={styles.td}>00 000 000</td>
              <td className={styles.td}>00 000 - 00 000</td>
              <td className={styles.td}>Новый</td>
              <td className={styles.td}>00 января 2023</td>
              <td className={styles.td}>Maryfort</td>
            </tr>
            </tbody>
        </table>
      </div>
    </div>
  </article>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Card;
