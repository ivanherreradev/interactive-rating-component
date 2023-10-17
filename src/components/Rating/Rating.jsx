import React from 'react';
import iconStar from '../../assets/icons/icon-star.svg';
import ButtonList from './components/ButtonList/ButtonList';

export default function Rating() {
  return (
    <section>
      <img src={iconStar} alt="Star" />
      <h2>How did we do?</h2>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <ButtonList />
      <button>Submit</button>
    </section>
  );
}
