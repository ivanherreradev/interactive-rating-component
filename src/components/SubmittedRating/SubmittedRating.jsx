import React from 'react';
import styles from './SubmittedRating.module.css'
import thankYou from '../../assets/icons/illustration-thank-you.svg';

export default function SubmittedRaging({rating}) {
  return (
    <section className={styles.submittedContainer}>
      <img src={thankYou} alt="Thank You" />
      <p className={styles.submittedRating}>You selected {rating} out of 5</p>
      <h2>Thank You!</h2>
      <p className={styles.submittedText}>
        {
          "We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!"
        }
      </p>
    </section>
  );
}
