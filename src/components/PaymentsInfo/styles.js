import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    width: 92%;
    font-size: 1.4rem;
    font-weight: 500;
    margin: 1rem 0 1.6rem 0;
  }
`;

export const Login = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-content: center;
  margin: 0.5rem 0 1rem 0;
  img {
    border-radius: 80%;
    width: 1.6rem;
    height: 1.5rem;
  }
  button {
    display: flex;
    background: rgba(0, 0, 0, 0.05);
    border: none;
    border-radius: 10px;
    padding: 0.2rem 0.8rem;

    font-size: medium;
  }
  span {
    font-weight: bolder;
    margin: 0 0 0 0.2rem;
  }
`;

export const Background = styled.div`
  background: #f7f7f7;
  width: 92%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  margin: 0 0 1.4rem 0;
  border-radius: 7px;
  h3 {
    margin: 0 0 0.85rem 0;
    font-size: 1.2rem;
    font-weight: 800;
  }
  img {
    width: 7.2rem;
    height: 6rem;
    border-radius: 10px;
    margin: 0 1.9rem 0 0;
  }
  h4 {
    font-size: 1.2rem;
    font-weight: 500;
    margin: 0 0 0.2rem 0;
    color: #1b1b1b;
  }
  h6 {
    color: #b0b0b0;
    font-size: 0.9rem;
    font-weight: 500;
    margin: 0 0 0.2rem 0;
  }
  div {
    display: flex;
    align-items: center;
  }
`;

export const List = styled.ul``;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #eaeaea;
  padding: 0 0 0.9rem 0;
  div {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }
  svg {
    color: #316734;
    width: 2rem;
    height: 2rem;
  }
  b {
    font-weight: 500;
  }
  h4 {
    margin: 0 0 0.3rem 0.5rem;
    font-size: 1.1rem;
  }
  span {
    font-size: 0.8rem;
    color: #c8c6c6;
    font-weight: 300;
    letter-spacing: 0.5px;
  }
  p {
    display: flex;
    align-items: center;
    font-size: xx-large;
    font-weight: bolder;
    svg {
      color: black;
    }
  }
  &:last-child {
    border: none;
  }
`;


export const Button = styled.button`
  width: 90%;
  height: 2.5rem;
  font-weight: 700;
  color: #ffffff;
  background: #6b8067;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`