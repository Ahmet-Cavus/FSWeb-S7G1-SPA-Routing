import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import FilmCard from './FilmCard';

export default function Film(props) {
  const [movie, setMovie] = useState();
  const { movieId } = useParams();
  const {kaydedilenlerListesineEkle} = props;

  useEffect(() => {
    axios
      .get(`http://localhost:5001/api/filmler/${movieId}`) // Bu uç noktayı Postman'le çalışın
      .then(response => {
        setMovie(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [movieId]);

  // Yalnızca esnek görevlere geçtiğinizde burdaki yorum etiketini kaldırın
  const filmiKaydet = evt => { }

  if (!movie) {
    return <div>Film bilgisi yükleniyor...</div>;
  }

  const { title, director, metascore, stars } = movie;

  return (
    <div className="save-wrapper">
      <FilmCard movie={movie}></FilmCard>
      <button className="save-button" onClick={filmiKaydet}>Kaydet</button>
    </div>
  );
}
