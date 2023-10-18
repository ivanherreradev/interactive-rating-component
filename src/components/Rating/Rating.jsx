import React from 'react';
import ButtonList from './components/ButtonList/ButtonList';
import styles from './Rating.module.css';
import iconStar from '../../assets/icons/icon-star.svg';

export default function Rating({ handleClickRating, handleClickSubmitted }) {
  return (
    <section className={styles.ratingContainer}>
      <img src={iconStar} alt="Star" className={styles.star} />
      <h2>How did we do?</h2>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <ButtonList handleClickRating={handleClickRating} />
      <button className={styles.buttonSubmit} onClick={handleClickSubmitted}>
        Submit
      </button>
    </section>
  );
}
