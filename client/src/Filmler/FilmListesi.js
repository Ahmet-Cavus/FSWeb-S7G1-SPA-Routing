import React from 'react';
import { useHistory } from 'react-router-dom';
import FilmCard from './FilmCard';

export default function FilmListesi(props) {
  const history = useHistory();
  const { movies } = props;

  return (
    <div className="movie-list">
      {movies?.map(movie => (
        <div onClick={() => { history.push(`/filmler/${movie.id}`); }}>
        <FilmCard key={movie.id} movie={movie} />
        </div>
      ))}
    </div>
  );
  }
