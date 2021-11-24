import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
  padding: .5rem 0;
  img {
    width: 1.6rem;
    height: 1.6rem;
    border-radius: 7px;
    margin: 0 1rem 0 0;
  }
  a{
    color: rgba(207,207,207,255);
    font-size: .6rem;
    position: relative;
    bottom:-10%;
  }
  h4 {
    font-size: smaller;
    font-weight: 500;
    color: rgba(128,128,128,255);
 }
  div {
    display: flex;
    flex-direction: column;
    justify-items: center;
  }
`;
