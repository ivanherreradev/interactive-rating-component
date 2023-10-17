import React, { useState } from 'react';
import styles from './Button.module.css';

export default function Button({ number }) {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    setIsSelected(!isSelected);
  };

  return (
    <button
      className={`${styles.button} ${isSelected ? styles.buttonSelected : ''}`}
      onClick={handleClick}
    >
      {number}
    </button>
  );
}
