import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import api from '../../services/api';
import { Comic } from '../../utils/types';
import { Container } from './styled';

const HqDetails = () => {
  const params = useParams();

  const [comic, setComic] = useState<Comic | null>(null);

  useEffect(() => {
    api
      .get(`/comics/${params.id}`)
      .then(response => {
        setComic(response.data.data.results[0]);
        console.log(response.data.data.results[0]);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <Container>
      <div className="background"></div>
      <div className="hqs">
        <div className="comic" key={comic?.id}>
          <h1 className="title">{comic?.title}</h1>

          <img
            className="img"
            src={`${comic?.thumbnail.path}.${comic?.thumbnail.extension}`}
            alt={`foto do ${comic?.title}`}
          />
          <p className="price">$ {comic?.prices[0].price}</p>

          <NavLink to="/shopping">
            {' '}
            <button className="btn"> Comprar </button>
          </NavLink>

          <h3>Creators:</h3>
          {comic?.creators.items.map(item => {
            return <h3 className="Creators">{item.name}</h3>;
          })}
        </div>
      </div>
    </Container>
  );
};

export default HqDetails;
