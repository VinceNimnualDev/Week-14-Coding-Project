import React from 'react'; // Import React library
import Review from './Review'; // Import Review component from './Review' to be used in ReviewList

const ReviewList = ({ reviews }) => ( // Declare functional component 'ReviewList' and take in the prop 'reviews' as an parameter
    <div>
        {reviews.map((review, index) => ( 
            <Review key={index} content={review.content} />

        ))}
    </div>
);

export default ReviewList;


