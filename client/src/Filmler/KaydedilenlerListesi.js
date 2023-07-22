import React from 'react';
import { Link, NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";

export default function KaydedilenlerListesi(props) {
  const history = useHistory();
  return (
    <div className="saved-list">
      <h3>Kaydedilen Filmler:</h3>
      {props.list.map(movie => (
        <NavLink to ={`/filmler/${movie.id}`} 
        key={movie.id} 
        className="saved-movie">{movie.title}</NavLink>
      ))}
      <button className="home-button" onClick={() => {
        history.push("/");
      }}>Anasayfa</button>
    </div>
  );
}
