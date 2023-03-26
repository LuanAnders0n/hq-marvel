import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { Container } from './styled';
import { Comic } from '../../utils/types';
import { NavLink } from 'react-router-dom';

const Hqs = () => {
  const [comics, setComics] = useState<Comic[]>([]);

  useEffect(() => {
    api
      .get(`/comics?&startYear=2018&limit=50`)
      .then(response => {
        setComics(response.data.data.results);
        console.log(response.data.data.results);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <Container>
        {comics.map(comics => {
          return (
            <NavLink className="link" to={`/comic/${comics.id}`}>
              <li key={comics.id}>
                <div className="card">
                  <img
                    className="img"
                    src={`${comics.thumbnail.path}.${comics.thumbnail.extension}`}
                    alt={`foto do ${comics.title}`}
                  />
                  <div className="textBox">
                    <p className="title">{comics.title}</p>
                    <p className="price">${comics?.prices[0].price}</p>
                    <NavLink to="/shopping">
                      {' '}
                      <button className="btn"> Comprar </button>
                    </NavLink>
                  </div>
                </div>
              </li>
            </NavLink>
          );
        })}
      </Container>
    </div>
  );
};

export default Hqs;
