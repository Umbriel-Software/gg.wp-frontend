import styled from 'styled-components';
import { shade } from 'polished';

import background from '../../assets/backgroundteste.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 750px;

  display: flex;
  flex-direction: column;
  place-content: flex-start;
  align-items: flex-start;

  padding: 10px 50px;

  img {
    width: 90px;
    height: 60px;
  }
`;

export const Form = styled.form`
  margin-top: 40px;
  width: 100%;
  max-width: 580px;
  display: flex;

  input {
    flex: 1;
    max-width: 360px;
    height: 46px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #7b7b7b;
    border: 2px solid #fff;
    border-right: 0;

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 180px;
    height: 46px;
    background: #ed5f9e;
    border-radius: 0 5px 5px 0;
    border: 0;
    color: #fff;
    font-weight: 500;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#ED5F9E')};
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${background}) no-repeat center;
  background-size: cover;
`;

export const SummonerInfo = styled.div`
  margin-top: 40px;
  max-width: 544px;
  width: 100%;

  a {
    background: #fff;
    border-radius: 6px;
    width: 100%;
    padding: 18px;
    display: block;
    text-decoration: none;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);

    display: flex;
    align-items: center;
    transition: transform 0.2s;

    & + a {
      margin-top: 10px;
    }

    &:hover {
      transform: translateX(10px);
    }

    > img {
      width: 59px;
      height: 59px;
      border-radius: 50%;
      margin-right: 16px;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
    }

    div {
      flex: 1;

      strong {
        font-size: 18px;
        color: #5a5a5a;
      }

      section {
        display: flex;

        align-items: center;

        p {
          font-size: 14px;
          color: #a8a8b3;
        }

        img {
          width: 18px;
          height: 18px;
          margin-left: 4px;
        }
      }
    }

    svg {
      margin-left: auto;
    }
  }
`;
