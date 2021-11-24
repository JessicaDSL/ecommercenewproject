import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem 0 .3rem 0;
  border-bottom: 1px solid rgba(244,244,244,255);
  span {
    margin: 0 1rem;
  }
  div {
    flex-direction: column;
    align-items: center;
    display: flex;
    h2 {
      color: #464646;
      font-size: 1rem;
      font-weight: 800;
    }
    span {
      color: rgba(207, 207, 207, 255);
      font-size: .6rem;
      margin: 0;
    }
  }
`;
