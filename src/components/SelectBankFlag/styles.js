import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h5 {
    color: #b3b3b3;
    font-weight: 700;
    padding: 1rem 0 0 4%;
    font-size: 0.5rem;
    display: flex;
    width: 100%;
  }
  ${media.greaterThan("large")`
  h5 {
    color: #b3b3b3;
    font-weight: 700;
    padding: 1rem 0 0 4%;
    font-size: large;
    display: flex;
    width: 80%;
    margin: 1rem 0 2rem;
  }
  `}
`;
