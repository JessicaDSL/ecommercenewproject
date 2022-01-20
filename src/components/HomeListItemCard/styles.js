import styled from "styled-components";
import media from "styled-media-query";

export const ListItem = styled.li`
  width: 84%;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    border-radius: 4px;
    width: 100%;
  }
  h4,
  h2 {
    color: #fff;
    margin: 1rem 0;
    font-weight: 400;
    font-size: x-large;
  }
  h2 {
    font-weight: 500;
  }
  &:first-child {
    margin: 2rem 0 0 0;
  }
  ${media.between("medium", "large")`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    width: 48%;
    margin: 1rem 0;
    padding: 1.4rem;
    &:first-child {
      margin: 0;
  }
  `}
  ${media.greaterThan("large")`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 30%;
    margin: 1rem 0;
    padding: 1.4rem;
    h4, h2 {
    color: #fff;
    margin: 1.5rem 0;
    font-weight: 400;
    font-size: xx-large;
  }
    &:first-child {
      margin: 0;
  }
  `}
`;
export const Info = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  color: #8d8d8d;
  h3 {
    font-size: smaller;
    font-weight: 300;
  }
  ${media.greaterThan("huge")`
  h3 {
    font-size: large;
    font-weight: 300;
  }
  `}
`;

export const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex: 1;
  padding: 0.8rem 0;
  color: white;
  font-weight: 700;
  font-size: medium;
  background: #fd4370;
  border: none;
  border-radius: 0px 0px 5px 5px;
`;

export const Select = styled.select`
  background: none;
  border-radius: 10px;
  height: 1.8rem;
  width: 4rem;
  padding: 0 0.2rem;
  color: #8d8d8d;
  margin: 0 0.6rem;
  border: 1px solid #1b1e32;
  font-size: 1rem;
  option {
    color: #fff;
    &:hover {
      background: #8d8d8d;
    }
  }
  ${media.greaterThan("huge")`
  font-size: large;
  width: 5rem;
  `}
`;
export const Content = styled.div`
  width: 90%;
  margin: 5rem;
  display: flex;
  align-items: center;
  hr {
    width: 40%;
    border: 0.001rem solid #1b1e32;
  }
  svg {
    margin: 0 1rem;
    color: #1b1e32;
    font-size: xx-large;
    font-weight: 300;
  }
  ${media.greaterThan("small")`
  display: none;
    `}
`;
