import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.attribution}>
      <p>
        Challenge by{' '}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by{' '}
        <a href="https://github.com/ivanherreradev" target="_blank" rel="noreferrer">
          Ivan Herrera
        </a>
      </p>
    </footer>
  );
}
