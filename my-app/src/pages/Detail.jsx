import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const API_URL = 'https://rickandmortyapi.com/api/character';

function Detail() {
  const params = useParams();
  const [info, setInfo] = useState({});
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    const getCharacter = () => {
      setLoading(true);
      fetch(`${API_URL}/${params.id}`)
        .then(res => res.json())
        .then(data => {
          setInfo(data);
          setLoading(false);
        })
    }

    getCharacter();
  }, []);


  return (
    <div>
      {loading ? (
        <p>Cargando..</p>
      ) : (
        <div>
          <img src={info.image} />
          <h2>{info.name}</h2>
        </div>
      )}
    </div>
  );
}

export default Detail;