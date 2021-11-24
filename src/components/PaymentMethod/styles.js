import styled from "styled-components";

export const Container = styled.div`
  margin: 0.8rem 0 0 0;
`;

export const List = styled.ul`
  background: rgba(0, 0, 0, 0.04);
  border-radius: 10px;
  padding: 0.8rem;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 0 1rem 0;
  padding: 1rem 1.5rem;
  background: white;
  border-radius: 10px;
  div {
  }
  img {
    width: 2.5rem;
  }
  span {
    img {
      width: 0.9rem;
    }
    strong {
      margin: 0 0 0 0.4rem;
      font-size: 0.6rem;
    }
    color: rgba(200, 200, 200, 255);
    font-size: smaller;
  }
`;

export const PaymentOnline = styled.div`
  display: flex;
  flex-direction: column;
  strong {
    background: rgba(255, 204, 0, 255);
    width: 65%;
    height: 1.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    font-size: 0.6rem;
    color: rgba(0, 0, 0, 0.4);
  }
`;


export const Btn = styled.button`
  margin: 2.5rem 0 4rem 0;
  width: 100%;
  padding: .8rem 0;
  font-weight: bold;
  color: white;
  background: pink;
  border: none;
  border-radius: 7px;
  cursor: pointer;
`