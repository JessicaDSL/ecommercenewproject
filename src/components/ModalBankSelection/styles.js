import styled from "styled-components";

export const Background = styled.div`
  width: 100%;
  height: 100vh;
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
  a {
    color: #a2a2a2;
    text-decoration: underline;
    font-size: 0.7rem;
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
  background: #f4f4f4;
  max-height: 100px;
  width: 90%;
  border-radius: 2px;
  overflow-y: scroll;
  color: #9d9d9d;
  padding: 0.8rem;
  margin: 0.6rem 0 0.5rem 0;
  p {
    font-size: 0.7rem;
    margin: 0.6rem 0;
  }
`;

export const Button = styled.button`
  background: #0078cd;
  color: #f8fbfd;
  border: none;
  font-weight: 600;
  letter-spacing: 0.5px;
  width: 90%;
  height: 2.6rem;
  border-radius: 4px;
  margin: 1.5rem 0 0 0;
`;
