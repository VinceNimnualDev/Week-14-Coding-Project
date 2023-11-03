import React from 'react';
import MovieList from './MovieList';

const App = () => {
  return (
    <div>
      <header>
        <h1>Movie Review Application</h1>
      </header>
      <main>
        <MovieList /> {/* MovieList component will be rendered here */}
      </main>
    </div>
  );
};

export default App;