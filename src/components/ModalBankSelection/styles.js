import styled from "styled-components";

export const Background = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  img {
    width: 8.5rem;
    margin: 6% 0 0 0;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
  p {
    margin: 0 0 0.6rem 0;
    display: flex;
    align-items: center;
  }
  label {
    margin: 0 0 0 0.6rem;
    font-weight: 500;
    font-size: small;
  }
`;

export const Section = styled.div`
  background: #1b1e32;
  max-height: 150px;
  width: 100%;
  border-radius: 2px;
  overflow-y: scroll;
  color: #9d9d9d;
  padding: 0.8rem;
  margin: 1.2rem 0;
  p {
    font-size: 0.7rem;
    margin: 0.6rem 0;
  }
`;

export const Button = styled.button`
  background: ${({ checked }) => (checked ? "#fe4370" : "gray")};
  color: #f8fbfd;
  border: none;
  font-weight: 600;
  letter-spacing: 0.5px;
  width: 100%;
  height: 2.6rem;
  border-radius: 4px;
  cursor: ${({ checked }) => (checked ? "pointer" : "not-allowed")};
  margin: 1.5rem 0 4rem 0;
`;

export const BankLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  margin: 4rem 0 2rem 0;
  img {
    width: 3rem;
    margin: 0 1rem 0 0;
  }
  h2 {
    color: #e6e7e8;
    font-size: x-large;
  }
`;
