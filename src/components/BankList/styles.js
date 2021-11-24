import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 88%;
  margin: .1rem 0;
  ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    li {
      display: flex;
      align-items: center;
      border-bottom: 1px solid rgba(244,244,244,255);
      svg {
        color: rgba(105,105,105,255);
      }
      &:last-child {
        border: none;
      }
    }
  }
`;
