import React, { useState } from 'react';
import styles from './Button.module.css';

export default function Button({ number, handleClickRating, isAnySelected }) {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    if (!isAnySelected || isSelected) {
      handleClickRating(number);
      setIsSelected(!isSelected);
    }
  };

  return (
    <button
      className={`${styles.button} ${isSelected ? styles.buttonSelected : ''}`}
      onClick={handleClick}
      disabled={isAnySelected && !isSelected}
    >
      {number}
    </button>
  );
}
