import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container } from './styled';
import logo from '../../images/Marvel.png';

const NavBar = () => {
  return (
    <div>
      <Container>
        <div className="logo-body">
          <img className="logo" src={logo} alt="" />
        </div>

        <div className="menu-body">
          <NavLink className="link" to="/Shopping">
            <p> Carrinho</p>
          </NavLink>
        </div>
      </Container>
    </div>
  );
};

export default NavBar;
