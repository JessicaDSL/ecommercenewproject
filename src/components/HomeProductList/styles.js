import styled from "styled-components";
import media from "styled-media-query";

export const List = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${media.between("450px", "medium")`
  width: 80%;
  `}
  ${media.between("medium", "large")`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 94%;
  `}
  ${media.greaterThan("large")`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 94%;
    margin: 2.2rem 0;
  `}
`;
