import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  text-align: center;

  list-style-type: none;

  .card {
    width: 300px;
    height: 475px;
    border-radius: 30px;
    background: #ffffff;
    border: 1px solid #ebe6e6;
    margin: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: 0.3s ease;

    :hover {
      box-shadow: 5px 5px 6px #808080;
    }
  }
  .img {
    width: 170px;
    height: 250px;
    border: 1px solid #111;
  }

  .title {
    text-decoration: none;

    font-size: 20px;
    font-weight: bolder;
    text-transform: uppercase;
    margin-top: 20px;
    color: #000000;
  }

  .price {
    text-decoration: none;

    font-size: 20px;
    font-weight: lighter;
    margin-top: 10px;
    color: #000000;
  }

  .link {
    text-decoration: none;
  }
  .btn {
    padding: 0.8em 1.8em;
    border: 2px solid #ed3d3d;
    border-radius: 5px 20px 5px 20px;
    position: relative;
    overflow: hidden;
    background-color: transparent;
    text-align: center;
    text-transform: uppercase;
    font-size: 16px;
    transition: 0.3s;
    z-index: 1;
    color: #ed3d3d;
    font-weight: bold;
    margin-top: 25px;

    ::before {
      content: '';
      width: 0;
      height: 300%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(45deg);
      background: #ed3d3d;
      transition: 0.5s ease;
      display: block;
      z-index: -1;
    }

    :hover::before {
      width: 105%;
    }

    :hover {
      color: #111;
    }
  }
`;
