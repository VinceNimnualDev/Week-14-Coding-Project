// Import React library 
import React from 'react';

// Definite Stars component that sets rating and setRating as props
const Stars = ({ rating, setRating }) => {
  // Function to handle stars review based on clicks
  const handleStarClick = (index) => {
    // Set the rating to one more than the index of click stars since index starts at 0
    setRating(index + 1);
  };

  // Renders Stars components
  return (
    <div>
      {/* Create an array of 5 elments that will represent 5 stars */}
      {[...Array(5)].map((star, index) => {
        // Determine the value for this star as 1 through 5
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
