import React, {useState, useEffect} from 'react'; // Import hoooks for state managment
import Movie from './Movie'; // Import Movie component used to display each movie

//Defining MovieList component
const MovieList = () => { 
    // State variable to store list of movies
    const [movies, setMovies] = useState([]);
    // State variable to keep track of loading status
    const [loading, setLoading] = useState(true);
    // State variable to store any errors that may happen during fetching
    const [error, setError] = useState(null);

    // useEffect hook to perform data fetching side effect
    useEffect(() => {
    // Defining async function to fetch movies from API
    const fetchMovies = async() => {
        try {
            // API key
            const apiKey ='32735e8d4807fc1c4f5e8925d736d525';
            // URL endpoint from where to fetch movies
            const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;
            // Fetching data from URL endpoint
            const response = await fetch(URL);
            // Throw an error is response fails
            if(!response.ok) {
                throw new Error(`HTTP Error! status: ${response.status}`);    
            }
            // Paring JSON response
            const data = await response.json();
            // Mapping over results to create an array of movie objects
            const movieData = data.results.map((movie) => ({
                id: movie.id,
                title: movie.title,
                synopsis: movie.overview,
                image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
                rating: 0, // Initial rating set to 0
                reviews: [] // Initial empty array for reviews

            }));
            // Updating movies state variable with fetching data
            setMovies(movieData);
           // Set loading state to false when fetching is complete
            setLoading(false);
        } catch (error) {
            // Cathing errors and updating error state variable
            setError(error.message);
            // Set loading to false when fetching process is complete
            setLoading(false);
        }
    };

    // Calling fetchMovies function
    fetchMovies();
    // Empty dependence array ensures this effect only runs after initial render
}, []);

// Returning a loading message if loading state occurs 
if (loading) return <div>Loading...</div>;
// Returning an error message if error occurs
if (error) return <div>Error: {error}</div>;

// Return JSX to be rendered
return (
    <div>
        {/* Mapping over movies array and rendering a Movie component */}
        {movies.map((movie) => (
            <Movie key={movie.id} data={movie} />
        ))}
    </div>
);
        };
        
// Exporting MovieList component to other files to be used
export default MovieList;