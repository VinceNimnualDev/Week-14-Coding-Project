// Importing React and hooks to manage state within the component
import React, {useState} from 'react';
// Importing child components that will be used in the Movie component
import Stars from './Stars';
import ReviewList from './ReviewList';
import ReviewForm from './ReviewForm';

// Define Movie component with props
const Movie = ({data}) => {
    // Using useState to manage movie date state
    const [movieData, setMovieData] = useState(data);
    // Using useState to manage rating state
    const [rating, setRating] = useState(movieData.rating);

    // Function to handle new review submissions
    const submitReview = (content) => {
        // Updating movieData state to include new reviews
        setMovieData({
            ...movieData,
            reviews: [...movieData.reviews, {content}]
        });
    };

    // Returning JSX to render Movie component
    return (
        <div>
            {/* Display the movie's image with alt text as movie's title */}
            <img src={movieData.image} alt={movieData.title} />
            {/* Display movie titile */}
            <h2>{movieData.title}</h2>
            {/* Using Stars component to display movie's rating */}
            <Stars rating={rating} setRating={setRating} />
            {/* Display the movie's synopsis */}
            <p>{movieData.synopsis}</p>
            {/* Using ReviewList compont to display list of reviews */}
            <ReviewList reviews={movieData.reviews} />
            {/* Using ReviewForm componet to submit a new review */}
            <ReviewForm submitReview={submitReview} />
        </div>
    );
};

// Export Movie component to other files 
export default Movie;