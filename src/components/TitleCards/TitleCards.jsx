import React, { useEffect, useRef, useState } from 'react';
import './TitleCards.css';

const TitleCards = ({ title, category }) => {
  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  };
  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef();
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNjdlZGUwZWM4Nzk2YmVlZDVjZWFjNTY4YTk5ZjZhNiIsIm5iZiI6MTc0NTY1OTMwMi4xODUsInN1YiI6IjY4MGNhNWE2YTYwNGIwODBmNTg1ODllMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gH4cADJP4gVI3oyDuKTX4fkTljSQd3fbhPHNPmWKNB8',
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        category ? category : 'now_playing'
      }?language=en-US&page=1`,
      options
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results))
      .catch((err) => console.error(err));
    cardsRef.current.addEventListener('wheel', handleWheel);
  }, []);
  return (
    <div className="titlecards">
      <h2>{title ? title : 'Popular on Netflix'}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => {
          return (
            <div className="card" key={index}>
              <img
                src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path}
              ></img>
              <p>{card.original_title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCards;
