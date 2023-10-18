import React, { useState } from 'react';
import './App.css';
import SubmittedRaging from './components/SubmittedRating/SubmittedRaging';
import Rating from './components/Rating/Rating';

export default function App() {
  const [rating, setRating] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleClickRating = (rating) => {
    setRating(rating);
  };

  const handleClickSubmitted = () => {
    setIsSubmitted(true);
  };

  return (
    <main className="App">
      {isSubmitted ? (
        <SubmittedRaging />
      ) : (
        <Rating
          handleClickRating={handleClickRating}
          handleClickSubmitted={handleClickSubmitted}
        />
      )}
    </main>
  );
}
