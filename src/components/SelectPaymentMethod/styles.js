import styled from "styled-components";
import media from "styled-media-query";

export const Form = styled.form`
  margin: 0.8rem 0 0 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const List = styled.ul`
  border-radius: 10px;
  width: 98%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${media.between("medium", "large")`
    width: 90%;
    margin: .5rem 0;
  `}
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 94%;
  cursor: pointer;
  margin: 0 0 1rem 0;
  padding: 1rem 1.5rem;
  background: #1b1e32;
  border-radius: 10px;
  border: ${({ selectedPaymenth }) =>
    selectedPaymenth ? "1px solid green" : "none"};
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
  button {
    background: none;
    border: none;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
  }
  ${media.between("small", "medium")`
    width: 80%;
  `}
  ${media.between("medium", "huge")`
    width: 90%;
    margin: .8rem 0;
    height: 6rem;
  `}
  ${media.greaterThan("huge")`
    width: 80%;
    font-size: xx-large;
    padding: 0 1.5rem;
    height: 6rem;
    img {
    width: 4rem;
  }
  `}
`;

export const PaymentOnline = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  p {
    margin: 0 0 0.3rem 0;
    color: #b9babf;
  }
  strong {
    background: rgba(255, 204, 0, 255);
    width: 5rem;
    height: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    font-size: 0.6rem;
    color: rgba(0, 0, 0, 0.4);
  }
  ${media.between("medium", "huge")`
  font-size: x-large;
  `}
  ${media.greaterThan("huge")`
    font-size: x-large;
  `}
`;

export const ImageFlags = styled.div`
  img {
    width: 1.2rem;
    padding: 0 0.1rem;
  }
  span {
    padding: 0 0 0 0.5rem;
  }
  ${media.between("medium", "huge")`
  img {
    width: 1.8rem;
    margin: 0 .2rem;
  }
  span {
    padding: 0 0 0 0.5rem;
    margin: 0 .5rem 0 0;
    font-size: small;
  }
  `}
  ${media.greaterThan("huge")`
    img {
    width: 2rem;
    margin: 0 .3rem;
  }
  span {
    padding: 0 0 0 0.5rem;
    margin: 0 .5rem 0 0;
    font-size: small;
  }
  `}
`;

export const CardPayment = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  button {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #b9babf;
  }
  p {
    color: #b9babf;
  }
  div {
    display: flex;
    flex-direction: row;
  }
  ${media.between("medium", "huge")`
  font-size: x-large;
  div {
    img {
      width: 4rem;
    }
  }
  `}
  ${media.greaterThan("huge")`
    font-size: x-large;
  `}
`;

export const ApplePayment = styled.div`
  display: flex;
  width: 100%;
  button {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #b9babf;
  }
  p {
    color: #b9babf;
  }
  svg {
    font-size: large;
  }
  span {
    font-size: medium;
    display: flex;
    font-weight: 500;
  }
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  ${media.between("medium", "huge")`
  font-size: x-large;
    div, span {
      font-size: x-large;
  }
  `}
  ${media.greaterThan("huge")`
    font-size: x-large;
    div, span {
      font-size: x-large;
  }
  `}
`;

export const Btn = styled.button`
  margin: 1rem 0 4rem 0;
  width: 94%;
  padding: 0.8rem 0;
  font-weight: bold;
  color: white;
  background: ${({ selectedPaymenth }) =>
    selectedPaymenth ? "gray" : "#fe4370"};
  border: none;
  border-radius: 7px;
  cursor: pointer;
  &:disabled {
    background: gray;
    cursor: not-allowed;
  }
  ${media.between("small", "medium")`
    width: 80%;
  `}
  ${media.between("medium", "large")`
    width: 80%;
    padding: 1.1rem 0;
  `}
  ${media.between("large", "huge")`
    width: 88%;
    padding: 1.4rem 0;
    margin: 3rem 0;
    font-size: x-large;
    letter-spacing: 1px;
  `}
  ${media.greaterThan("huge")`
    width: 78%;
    padding: 2rem 0;
    font-size: x-large;
  `}
`;
