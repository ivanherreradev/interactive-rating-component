import React, { useState } from 'react';
import SubmittedRaging from './components/SubmittedRating/SubmittedRating';
import Rating from './components/Rating/Rating';
import './App.css';
import Footer from './components/Footer/Footer';

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
    <>
      <main className="App">
        {isSubmitted ? (
          <SubmittedRaging rating={rating} />
        ) : (
          <Rating
            handleClickRating={handleClickRating}
            handleClickSubmitted={handleClickSubmitted}
          />
        )}
      </main>
      <Footer />
    </>
  );
}
