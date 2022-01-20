import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  a {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  svg {
    color: #fd6489;
    font-size: 1120%;
  }
  p {
    margin: 7% 0 0 0;
    font-weight: 400;
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  button {
    border: none;
    color: #fff;
    font-weight: 600;
    background: #fd4370;
    height: 2.5rem;
    width: 70%;
    border-radius: 7px;
    margin: 3rem 0;
  }
`;
