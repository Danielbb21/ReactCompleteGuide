import React, { useEffect, useState, useCallback } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('https://swapi.dev/api/films');
      const responseStatus = response.status.toString().split('').shift();
      if (responseStatus === '4' || responseStatus === '5') {
        console.log('herre')
        throw new Error('Something went wrong');
      }
      const data = await response.json();

      const transformedMovies = data.results.map(movieData => {
        return {
          id: movieData.epsode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date
        }
      })
      setMovies(transformedMovies);
      setIsLoading(false);
    } catch (err) {
      console.log('error', err);
      setIsLoading(false);
      setError(err.message);
    }
  }, []);


  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  let content = <p>No Movies</p>
  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }

  if (isLoading) {
    content = <p>Loading...</p>
  }

  if (!isLoading && error) {
    content = <p>{error}</p>
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler} > Fetch Movies</button>
      </section>
      <section>

        {content}
      </section>
    </React.Fragment>
  );
}

export default App;
