import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const List = styled.div`
  ${media.greaterThan("large")`
    display: flex;
    justify-content: center;
    width: 86%;
    flex-wrap: wrap;
  `}
`;

export const ListItem = styled.div`
  ${media.greaterThan("large")`
    display: flex;
    margin: 2.1rem;
    width: 25%;
  `}
`;
