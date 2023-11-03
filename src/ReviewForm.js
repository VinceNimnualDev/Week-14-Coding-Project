// Import useState from React for state management
import React, {useState} from 'react';

// Defie a comppnent 'ReviewForm' that takes a '
const ReviewForm = ({submitReview }) => {
    const [content, setContent] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        submitReview(content);
        setContent('')
    };

    return (
        <form onSubmit={handleSubmit}>
            <textarea value={content} onChange={(e) => setContent(e.target.value)} />
            <button type='submit'>Submit Review</button>
        </form>
    );
};

//Export the 'ReviewForm' component and uses it in other files
export default ReviewForm;