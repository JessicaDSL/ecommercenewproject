import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  display: flex;
  width: 86%;
  margin: 0.1rem 0;
  a {
    border-bottom: 0.5px solid #212133;
    &:last-child {
      border: none;
    }
  }
  ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    li {
      display: flex;
      margin: 1rem 0;
      align-items: center;

      svg {
        color: #3e3d56;
      }
    }
  }
  ${media.greaterThan("large")`
  width: 66%;
  svg {
        font-size: x-large;
      }
  `}
`;
