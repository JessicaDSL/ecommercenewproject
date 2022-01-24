import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 1rem 0 0.3rem 0;
  margin: 0 0 0.2rem 0;
  border-bottom: 1px solid #1b1e32;
  box-shadow: 0px 2px 10px 0px rgba(50, 50, 50, 0.1);
  span {
    margin: 0 1rem;
  }
  div {
    flex-direction: column;
    align-items: center;
    display: flex;
    h2 {
      color: #fff;
      font-size: 1rem;
      font-weight: 800;
    }
    span {
      color: #7c7f91;
      font-size: 0.6rem;
      margin: 0;
    }
  }
  button {
    background: none;
    border: none;
    color: #c1c1c6;
  }
`;
