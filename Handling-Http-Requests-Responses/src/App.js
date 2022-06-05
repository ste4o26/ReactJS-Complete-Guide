import React, { useState, useEffect, useCallback } from 'react';

import MoviesList from './components/MoviesList';
import AddMovie from './components/AddMovie';
import './App.css';
const FIREBASE_DB = `https://react-http-dff3e-default-rtdb.europe-west1.firebasedatabase.app/movies.json`;

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(FIREBASE_DB);
      if (!response.ok) throw new Error('Something went wrong!');

      const loadedMovies = [];
      const data = await response.json();
      for (const movieId in data) {
        const movie = {
          id: movieId,
          title: data[movieId].title,
          openingText: data[movieId].openingText,
          releaseDate: data[movieId].releaseDate
        }

        loadedMovies.push(movie);
      }

      setMovies(loadedMovies);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  async function addMovieHandler(movie) {
    try {
      let res = await fetch(FIREBASE_DB, {
        method: 'POST',
        body: JSON.stringify(movie),
        headers: { 'Content-Type': 'application/json' }
      });

      if (!res.ok) throw new Error('Something went wrong!');
      const data = await res.json();
    } catch (error) {
      setError(error.message)
    }
  }

  let content = <p>Found no movies.</p>;
  if (movies.length > 0) content = <MoviesList movies={movies} />;
  if (error) content = <p>{error}</p>;
  if (isLoading) content = <p>Loading...</p>;

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
