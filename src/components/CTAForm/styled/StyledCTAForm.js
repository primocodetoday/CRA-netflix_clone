﻿import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
  margin-top: 10px;
  flex-wrap: wrap;
  z-index: 1;
  flex-direction: row;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Input = styled.input`
  max-width: 450px;
  width: 100%;
  border: 0;
  padding: 10px;
  height: 60px;
  box-sizing: border-box;
`;

export const Text = styled.h3`
  font-size: 19.2px;
  color: white;
  text-align: center;
  font-weight: normal;
  padding: 0 10%;

  @media (max-width: 600px) {
    font-size: 18px;
    line-height: 22px;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  height: 60px;
  background: #e50914;
  color: white;
  text-transform: uppercase;
  padding: 0 32px;
  font-size: 26px;
  font-weight: 400;
  border: 0;
  border-radius: 2px;
  cursor: pointer;

  img {
    margin-left: 10px;

    filter: brightness(0) invert(1);
    width: 24px;

    @media (max-width: 1000px) {
      width: 16px;
    }
  }
  &:hover {
    background: #f40612;
  }

  @media (max-width: 1000px) {
    height: 50px;
    font-size: 16px;
    margin-top: 20px;
  }
`;