// Stars.js
import React from 'react';

const Stars = ({ rating, setRating }) => {
  const handleStarClick = (index) => {
    setRating(index + 1);
  };

  return (
    <div>
      {[...Array(5)].map((star, index) => {
        const ratingValue = index + 1;

        return (
          <label key={index}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => handleStarClick(index)}
            />
            <span className={ratingValue <= rating ? "on" : "off"}>★</span>
          </label>
        );
      })}
    </div>
  );
};

export default Stars;
