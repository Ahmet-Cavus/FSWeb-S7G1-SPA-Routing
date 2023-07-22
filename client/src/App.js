import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FilmListesi from "./Filmler/FilmListesi";
import KaydedilenlerListesi from "./Filmler/KaydedilenlerListesi";
import Film from "./Filmler/Film";

export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const FilmleriAl = () => {
      axios
        .get('http://localhost:5001/api/filmler') // Burayı Postman'le çalışın
        .then(response => {
          // Bu kısmı log statementlarıyla çalışın
          // ve burdan gelen response'u 'movieList' e aktarın
          setMovieList(response.data);
        })
        .catch(error => {
          console.error('Sunucu Hatası', error);
        });
    };
    FilmleriAl();
  }, []);

  const kaydedilenlerListesineEkle = (id) => {
    const bulduMu = saved.find((m) => m.id == id);
    if (!bulduMu) {
    const movie = movieList.find((m) => m.id == id);
    setSaved([...saved, movie]);
   }
  };

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact>
            <FilmListesi movies={movieList} />
          </Route>
          <Route path="/filmler/:movieId" exact>
            <Film kaydedilenlerListesineEkle={kaydedilenlerListesineEkle} />
          </Route>
        </Switch>
      </div>
      <div>
       <KaydedilenlerListesi lis t={saved} />
      </div>
    </Router>
  );
}
