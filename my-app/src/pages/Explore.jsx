import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Search from '../components/Search';
// import useFetch from '../hooks/useFetch';
import PersonCard from '../components/PersonCard';

const ListOfPersons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;

  > a {
    width: 25%;
  }
`;

const API_URL = 'https://rickandmortyapi.com/api/character';

// const postConfig = {
//   initialUri: '/api/user/create',
//   initialMethod: 'post',
// };

function Explore() {
  // const { fetch, loading } = useFetch(postConfig);
  const [persons, setPersons] = useState([]);
  const [loading, setLoading] = useState(false);

  const getPersons = (name = null) => {
    const filterApi = name
      ? `${API_URL}/?name=${name}`
      : API_URL;

    setLoading(true);
    fetch(filterApi)
      .then(res => res.json())
      .then(data => {
        console.log('response: ', data);
        setPersons(data.results);
        setLoading(false);
      })
  };

  useEffect(() => {
    getPersons();
  }, []);

  const handleSearch = (personName) => {
    getPersons(personName)
  }
  
  return (
    <div>
      <Search
        placeholder="Busca tu pokemon.."
        onSearch={handleSearch}
      />
      
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <ListOfPersons>
          {persons.map((character) => (
            <PersonCard key={character.id} {...character} />
          ))}
        </ListOfPersons>
      )}
    </div>
  );
}

export default Explore;