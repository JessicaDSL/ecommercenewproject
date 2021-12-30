import styled from "styled-components";

export const Background = styled.div`
  width: 100%;
`;

export const Container = styled.div`
  margin: 8% 0 0 2%;
  padding: 6% 0% 4% 9%;
  background: #597056;
  border-radius: 5px 0 0 5px;
  color: #eaedea;
  h2 {
    font-size: 2.8rem;
    font-weight: 800;
  }
  strong {
    color: #a6cf82;
    font-weight: 800;
  }
  p {
    font-weight: 800;
    letter-spacing: .5px;
    font-size: 1.3rem;
    margin: 0.6rem 0 1rem;
    max-width: 70%;
  }
  button {
    position: relative;
    left: 56%;
    margin: 12% 0 8% 0;
    background: ${({state}) => (state ? 'none' : 'pink')};
    border: 1px solid #d9ded8;
    color: #d9ded8;
    border-radius: 2px;
    width: 6.5rem;
    height: 2.5rem;
    font-weight: 600;
    letter-spacing: .2px;
    cursor: ${({state}) => (state ? 'pointer' : 'not-allowed')};;
  }
`;

export const List = styled.ul`
  list-style: disc;
`;

export const ListItem = styled.li`
  margin: 0.8rem 1.4rem;
  max-width: 66%;
  font-size: 0.85rem;

`;

export const Label = styled.label`
display: flex;
align-items: center;
margin: 1.8rem 0 0 0;
  span {
    margin: 0 0 0 .5rem;
    font-size: small;
  }
`

export const Input = styled.input`
  
  border: 1px solid #d9ded8;
  color: white;
  background: pink;
  width: .8rem;
  height: .8rem;
  border-radius: 2px;
  display: inline-block;
`;
