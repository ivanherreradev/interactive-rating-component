import React, { useState } from 'react';
import Button from '../Button/Button';
import styles from './ButtonList.module.css';

export default function ButtonList({ handleClickRating }) {
  const [isAnySelected, setIsAnySelected] = useState(false);

  const handleButtonClick = (number) => {
    handleClickRating(number);
    setIsAnySelected(!isAnySelected);
  };

  const numbers = [1, 2, 3, 4, 5];
  return (
    <ul className={styles.buttonsList}>
      {numbers.map((number) => (
        <Button
          key={number}
          number={number}
          handleClickRating={handleButtonClick}
          isAnySelected={isAnySelected}
        />
      ))}
    </ul>
  );
}
