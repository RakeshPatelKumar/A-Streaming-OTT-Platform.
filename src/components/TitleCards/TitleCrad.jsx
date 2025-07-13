import React, { useEffect, useRef, useState } from 'react';
import './TitleCrads.css';
import { Link } from 'react-router-dom';

const TitleCrad = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);
  const cardRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOTVhNTNkMjA3NDdlOGUwNmVjZjQ5NTliN2Q4M2M2OCIsIm5iZiI6MTczNzgxMzIzMi4yMjIwMDAxLCJzdWIiOiI2Nzk0ZWNmMDVhN2Q4MDczMWQxODgzNTAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.ihm6LIpyDfa9bjWpUpRr7GkUs9uM3AWBj4KtQuqb88o',
    },
  };

  const handleWheel = (event) => {
    event.preventDefault();
    cardRef.current.scrollLeft += event.deltaY;
  };

  useEffect(() => {
    // 🛠 Fetch data once when category changes
    fetch(
      `https://api.themoviedb.org/3/movie/${category ? category : 'top_rated'}?language=en-US&page=1`,
      options
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results || []))
      .catch((err) => console.error(err));

    // 🛠 Add scroll event
    const currentRef = cardRef.current;
    currentRef?.addEventListener('wheel', handleWheel);

    // ✅ Clean up scroll listener
    return () => {
      currentRef?.removeEventListener('wheel', handleWheel);
    };
  }, [category]); // ✅ Add dependency

  return (
    <div className="title-cards">
      <h2>{title ? title : 'Popular on Netflix'}</h2>
      <div className="card-list" ref={cardRef}>
        {apiData.map((card, index) => {
          // ✅ Skip if backdrop_path is missing
          if (!card.backdrop_path) return null;

          return (
            <Link to={`/Player/${card.id}`} className="card" key={index}>
              <img src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`} alt={card.original_title} />
              <p>{card.original_title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCrad;
