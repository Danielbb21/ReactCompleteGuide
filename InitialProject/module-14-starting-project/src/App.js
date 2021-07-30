import React, { useEffect, useState, useCallback } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';
import AddMovie from './components/AddMovie';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('https://react-http-db86a-default-rtdb.firebaseio.com/movies.json');
      const responseStatus = response.status.toString().split('').shift();

      if (responseStatus === '4' || responseStatus === '5') {
        console.log('herre')
        throw new Error('Something went wrong');
      }
      const data = await response.json();
      console.log('data', data);
      const loadMovies = [];

      for (const key in data) {
        loadMovies.push({ id: key, ...data[key] });
        console.log(loadMovies);
      }
      const transformedMovies = loadMovies.map(movieData => {
        return {
          // id: movieData.epsode_id,
          title: movieData.title,
          openingText: movieData.openingText,
          releaseDate: movieData.releaseDate
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


  async function addMovieHandler(movie) {
    const response = await fetch('https://react-http-db86a-default-rtdb.firebaseio.com/movies.json', {
      method: 'POST',
      body: JSON.stringify(movie),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await response.json();
    console.log(data);
    fetchMoviesHandler()
  }

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
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
