import styled from 'styled-components';

export const Container = styled.div`
  .menu-body {
    width: 100%;
    height: 50px;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .logo-body {
    background: #ee171f;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .logo {
    width: 500px;
  }
  p {
    box-shadow: inset 0 0 0 0 #ee171f;
    color: #54b3d6;
    padding: 0 0.25rem;
    margin: 0 -0.25rem;
    transition: color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    :hover {
      color: #ffffff;
      box-shadow: inset 200px 0 0 0 #ee171f;
    }
  }
  p {
    color: #000000;
    font-family: 'Poppins', sans-serif;
    font-size: 27px;
    font-weight: 700;
    line-height: 1.5;
    text-decoration: none;
  }
  .link {
    text-decoration: none;
  }
`;
