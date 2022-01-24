import styled from "styled-components";
import media from "styled-media-query";

export const Background = styled.div`
  width: 94%;
  background: #1b1e32;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 3% 2%;
  margin: 5% 0;
  ${media.between("small", "medium")`
  width: 70%;
  margin: 2%;
  `}
  ${media.between("medium", "large")`
  width: 45%;
  margin: 2%;
  `}
  ${media.between("large", "huge")`
  width: 45%;
  margin: 1%;
  `}
  ${media.greaterThan("huge")`
  width: 48%;
  margin: .4%;
  `}
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-content: center;
  span {
    margin: 1rem 0;
    position: absolute;
    left: 90%;
    color: rgba(0, 0, 0, 0.3);
    font-size: smaller;
  }
  button {
    background: none;
    border: none;
    display: flex;
    color: #ac1237;
    margin: 3% 0 0 0;
  }

  ${media.greaterThan("huge")`
  span {
    margin: 1rem 0;
    position: absolute;
    left: 90%;
    color: rgba(0, 0, 0, 0.3);
    font-size: normal;
    
  }
  `}
`;

export const Image = styled.div`
  margin: 3% 0 0 0;
  border-radius: 7px;
  width: 35%;
  height: 9.5rem;
  position: relative;
  overflow: hidden;
  background: red;
  img {
    width: 100%;
    height: 100%;
    text-align: center;
    vertical-align: middle;
  }
  ${media.between("small", "medium")`
  width: 7rem;
  height: 7rem;
  `}
  ${media.between("large", "huge")`
  width: 9rem;
  height: 8rem;
  `}
  ${media.greaterThan("huge")`
  `}
`;

export const Description = styled.div`
  margin: 0;
  width: 55%;
  padding: 3% 0 0 0.5rem;
  display: flex;
  flex-direction: column;
  h5 {
    font-weight: normal;
    color: #fbfbfb;
  }
  h3 {
    margin: 0;
    font-weight: 500;
    color: #fbfbfb;
  }
  p {
    font-size: x-small;
    color: #5e6174;
    font-weight: 600;
  }
  ${media.between("small", "medium")`
  padding: .2rem 0 0 .5rem;
    h5 {
    font-size: medium;
  }
  h3 {
    font-size: large;
  }
  p {
    font-size: x-small;
  }
  `}
  ${media.between("large", "huge")`
  p {
    font-size: medium;
  }
  `}
  ${media.greaterThan("huge")`
    h5 {
    font-size: large;
  }
  h3 {
    font-size: x-large;
  }
  p {
    font-size: small;
  }
  `}
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
    color: #fbfbfb;
  }
  span {
    font-size: 0.7rem;
    position: relative;
    color: #3e3d56;
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
    color: #fbfbfb;
  }
  ${media.greaterThan("huge")`
  h4 {
    font-size: x-large;
  }
  span {
    font-size: medium;
  }
  strong {
    font-size: xx-large;
  }
  `}
`;
