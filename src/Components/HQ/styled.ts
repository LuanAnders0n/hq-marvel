import styled from 'styled-components';
import Marvel from '../../images/banner.png';

export const Container = styled.div`
  text-align: center;
  background-image: url(${Marvel});
  width: 100vw;
  height: auto;

  .hqs {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 700px;
    height: 975px;
    background-color: #ffffff;
    border-radius: 0px 45px 45px 0px;
  }

  .img {
    width: 350px;
    height: 500px;
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
    font-weight: 900;
    margin-top: 20px;
    margin-bottom: 25px;
    width: 200px;
    height: 75px;

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
  .title {
    text-transform: uppercase;
    font-weight: 800;
    font-size: 35px;
  }

  .price {
    font-size: 50px;
    font-weight: 900;
    color: #ed3d3d;
    margin-top: 10px;
  }
  .creators {
    margin-top: 5px;
  }
`;
