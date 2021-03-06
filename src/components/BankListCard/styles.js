import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  background: none;
  border: none;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  img {
    width: 1.8rem;
    height: 1.6rem;
    border-radius: 7px;
    margin: 0 1rem 0 0;
  }
  a {
    color: #3e3d56;
    font-size: 0.6rem;
    position: relative;
    bottom: -10%;
  }
  h4 {
    font-size: smaller;
    font-weight: 500;
    color: #c1c1c6;
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;
