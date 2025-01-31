import React, { useEffect, useState } from 'react';
import './Player.css';

import back_arrow_icon from '../../assets/back_arrow_icon.png';
import { useNavigate, useParams } from 'react-router-dom';

const Player = () => {

  const { id } = useParams();
  const navigate = useNavigate();


  const [apiData, setApiData] = useState({
    name: '',
    key: '',
    published_at: '',
    typeof: '',
  });

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOTVhNTNkMjA3NDdlOGUwNmVjZjQ5NTliN2Q4M2M2OCIsIm5iZiI6MTczNzgxMzIzMi4yMjIwMDAxLCJzdWIiOiI2Nzk0ZWNmMDVhN2Q4MDczMWQxODgzNTAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.ihm6LIpyDfa9bjWpUpRr7GkUs9uM3AWBj4KtQuqb88o'
    }
  };
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then(response => response.json())
      .then(response => setApiData(response.results[0]))
      .catch(err => console.error(err));
  }, []);






  return (
    <div className="player">
      <img
        src={back_arrow_icon}
        alt="Back"
        onClick={() => navigate(-1)} // Navigate back to the previous page
        
      />
      {apiData.key ? (
        <iframe
          width="90%"
          height="90%"
          src={`https://www.youtube.com/embed/${apiData.key}`}
          title="YouTube video player"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      ) : (
        <p>Loading video...</p>
      )}
      <div className="player-info">
        <p> {apiData.published_at.slice(0, 10)}</p>
        <p> {apiData.name}</p>
        <p> {apiData.type}</p>
      </div>
    </div>
  );
};

export default Player;
