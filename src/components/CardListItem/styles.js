import styled from "styled-components";

export const Background = styled.div`
  background: rgba(247, 247, 247, 255);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  margin: 0 0 1.1rem 0;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-content: center;
  h3 {
    font-weight: 500;
  }
  p {
    font-size: small;
    color: rgba(0, 0, 0, 0.2);
    font-weight: 600;
  }
  span {
    margin: 1rem 0;
    position: absolute;
    left: 90%;
    color: rgba(0, 0, 0, 0.3);
    font-size: smaller;
  }
`;

export const Image = styled.div`
  margin: 5% 0 0 0;
  border-radius: 7px;
  width: 7rem;
  height: 8rem;
  position: relative;
  overflow: hidden;
  img {
    position: relative;
    bottom: 30%;
    right: 60%;
    width: 15rem;
    height: 15rem;
    text-align: center;
    vertical-align: middle;
  }
`;

export const Description = styled.div`
  margin: 0.7rem 0 0 1rem;
  width: 55%;
  h5 {
    font-weight: normal;
    margin: 1rem 0 0 0;
  }
`;

export const Price = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  padding: 0 1.5rem 0 1rem;
  margin: 0.5rem 0;
  h4 {
    font-weight: 500;
    font-size: 0.8rem;
  }
  span {
    font-size: 0.7rem;
    position: relative;
    color: rgba(0, 0, 0, 0.3);
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  p {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  strong {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
  }
`;
