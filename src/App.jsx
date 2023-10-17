import React, { useState } from 'react';
import './App.css';
import SubmittedRaging from './components/SubmittedRating/SubmittedRaging';
import Rating from './components/Rating/Rating';

export default function App() {
  const [rating, setRating] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  return <main className="App">{isSubmitted ? <SubmittedRaging /> : <Rating />}</main>;
}
