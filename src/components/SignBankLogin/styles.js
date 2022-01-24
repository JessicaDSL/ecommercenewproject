import styled from "styled-components";

export const Container = styled.div`
  color: #3e3d56;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  a {
    color: #f76085;
    text-decoration: underline;
  }
  img {
    width: 9.5rem;
    margin: 9% 0 0%;
  }
  p {
    margin: 1.6rem 0;
    font-size: 0.8rem;
    font-weight: 400;
  }
  strong {
    position: absolute;
    top: 15%;
  }
`;

export const Fieldset = styled.fieldset`
  border: 1px solid #3e3d56 !important;
  padding: 0 1.4em 1.6em 1.4em !important;
  margin: 0 0 2em 0 !important;
  height: 1.1rem;
  border-radius: 7px;
  font-weight: 500;
  background: #1b1e32;
  color: #cfcfd3;
  input {
    border: none;
    background: none;
    color: #cfcfd3;
    &::placeholder {
      color: #a2a6b9;
    }
  }
`;

export const Legend = styled.legend`
  font-size: 0.7rem !important;
  text-align: left !important;
  width: auto;
  padding: 0 5px;
  border-bottom: none;
  color: #3e3d56;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin-bottom: 3rem;
`;

export const Button = styled.button`
  background: ${({ enableButton }) => (enableButton ? "gray" : "#fe4370")};
  width: 100%;
  border: none;
  border-radius: 4px;
  height: 2.7rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  color: #eff6fb;
`;

export const Input = styled.input`
  height: 2.4rem;
  border-radius: 7px;
  background: #1b1e32;
  border: 1px solid #3e3d56 !important;
  color: #cfcfd3;
  padding: 0 0 0 1.4rem;
  &::placeholder {
    color: #a2a6b9;
    background: red;
  }
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
    margin: 0 0 0 0;
    color: #e6e7e8;
  }
`;

export const EmailWard = styled.span`
  display: ${({ stateEmail }) => (stateEmail ? "none" : "block")};
  color: #4e2139;
  font-size: x-small;
  margin: 0.2rem 0;
`;

export const PasswordWard = styled.ul`
  color: #4e2139;
  font-size: x-small;
  margin: 0 0 0.2rem 1.4rem;
  display: ${({ statePassword }) => (statePassword ? "none" : "block")};
`;
