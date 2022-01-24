import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.form`
  margin: 0.8rem 0 0 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
  ${media.between("medium", "large")`
  width: 52%;
  `}
  ${media.greaterThan("large")`
  width: 45%;
  `}
`;

export const Background = styled.div`
  margin: 0 0 1rem 0;
  padding: 0 0 0.5rem 0;
  background: #1b1e32;
  width: 90%;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  button {
    background: none;
    border: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    border-radius: 7px;
    margin: 1rem 0;
    color: #fbfbfb;
  }
`;

export const OnlinePayBackground = styled.div`
  border: ${({ stateOnLinePayment }) =>
    stateOnLinePayment ? "1px solid #fe4370" : "none"};
  background: #25283c;
  width: 96%;
  display: flex;
  border-radius: 10px;
  margin: 0.5rem 0 0 0;
  height: 4rem;
  span {
    color: #5e6174;
    font-size: x-small;
  }
  ${media.between("large", "huge")`
  height: 6rem;
  span {
    font-size: medium;
  }
  `}
  ${media.greaterThan("huge")`
  height: 7rem;
  padding: 0 1.2rem;
  span {
    font-size: large;
  }
  `}
`;

export const CardPayment = styled.div`
  border: ${({ stateCardPayment }) =>
    stateCardPayment ? "1px solid #fe4370" : "none"};
  background: #25283c;
  width: 96%;
  display: flex;
  margin: 0.5rem 0 0 0;
  height: 4rem;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  button {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #fbfbfb;
  }
  div {
    display: flex;
    flex-direction: row;
    padding: 0 0.6rem 0 0.8rem;
    img {
      width: 3.5rem;
    }
  }
  ${media.between("large", "huge")`
  height: 5.2rem;
  p{
    font-size: x-large;
  }
  div {
    img {
    width: 4rem;
  }
  }
  `}
  ${media.greaterThan("huge")`
  height: 7.2rem;
  padding: 0 1rem;
  p{
    font-size: xx-large;
  }
  div {
    img {
    width: 6rem;
  }
  }
  `}
`;

export const ImageCardPayments = styled.div``;

export const ApplePayment = styled.div`
  border: ${({ stateApplePayment }) =>
    stateApplePayment ? "1px solid #fe4370" : "none"};
  background: #25283c;
  width: 96%;
  display: flex;
  margin: 0.5rem 0 0 0;
  height: 4rem;
  border-radius: 10px;
  display: flex;
  padding: 0 0.6rem 0 0.8rem;
  button {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #fbfbfb;
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
    margin: 0.3rem 0 0 0;
  }
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  ${media.between("large", "huge")`
  height: 5.2rem;
  div, span {
    font-size: x-large;
  }
  svg {
    font-size: x-large;
  }
  `}
  ${media.greaterThan("huge")`
  height: 7.2rem;
  padding: 0 2rem;
  div, span {
    font-size: xx-large;
  }
  svg {
    font-size: x-large;
  }
  `}
`;

export const PaymentOnline = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  p {
    margin: 0 0 0.3rem 0.8rem;
    color: #fbfbfb;
  }
  strong {
    background: rgba(255, 204, 0, 255);
    margin: 0 0 0.3rem 0.8rem;
    width: 5rem;
    height: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    font-size: 0.6rem;
    color: rgba(0, 0, 0, 0.4);
  }
  ${media.between("large", "huge")`
  p {
    font-size: x-large;
  }
  `}
  ${media.greaterThan("huge")`
  p {
    font-size: xx-large;
  }
  `}
`;

export const ImageFlags = styled.div`
  img {
    width: 1rem;
    padding: 0 0.1rem;
  }
  span {
    padding: 0 0.6rem 0 0.1rem;
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

export const Btn = styled.button`
  margin: 1.5rem 0 5rem 0;
  width: 90%;
  padding: 1rem 0;
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
  ${media.between("medium", "huge")`

  `}
  ${media.between("medium", "large")`
    width: 90%;
    padding: 1.2rem 0;
    font-size: medium;
  `}
  ${media.between("large", "huge")`
    width: 90%;
    padding: 1.4rem 0;
    margin: 3rem 0;
    font-size: x-large;
    letter-spacing: 1px;
  `}
  ${media.greaterThan("huge")`
    width: 90%;
    padding: 2rem 0;
    font-size: x-large;
  `}
`;

export const Button = styled.button``;
