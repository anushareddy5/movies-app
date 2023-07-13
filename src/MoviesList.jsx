import React, { useEffect, useState } from 'react';
import './movies.css';

const MoviesData = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url =
        'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1';

      try {
        const response = await fetch(url);
        const data = await response.json();

        // Log the data in the console
        console.log('Fetched Movies Data:', data.results);

        // Set movies data in state
        setMovies(data.results);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="movies-container">
      {movies.map((movie) => (
        <div key={movie.id} className="movie-card">
          {movie.poster_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`}
              alt={movie.title}
              className="movie-image"
            />
          ) : (
            <div className="no-image">No Image Available</div>
            )}
            <h3 className="movie-title">{movie.title}</h3>
            <div className="movie-popup">
              <h4 className="movie-popup-heading">Overview:</h4>
              <p className="movie-popup-content">{movie.overview}</p>
            </div>
            <p className="movie-rating">Rating: {movie.vote_average}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default MoviesData;
