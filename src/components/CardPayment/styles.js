import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    width: 100%;
    margin: 0 0 4% 0;
    padding: 0 0 0 1rem;
  }
  div {
    margin: 0 0 1.5rem 0;
    label {
      color: #7f8295;
      font-size: small;
      width: 100%;
      margin: 0 0.2rem 0 0;
    }
  }
`;

export const Form = styled.form`
  margin: 6% 0;
  color: #fed9e2;
  display: flex;
  width: 70%;
  flex-direction: column;
  button {
  }
  input {
    width: 100%;
    background: #1b1e32;
    border: 1px solid #3e3d56;
    border-radius: 4px;
    padding: 5px;
    color: #e8e8ea;
    &::placeholder {
      color: #3e3d56;
    }
  }
`;

export const Button = styled.button`
  background: ${({ enableButton }) => (enableButton ? "#fe4370" : "gray")};
  width: 100%;
  border: none;
  border-radius: 4px;
  height: 2.7rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  color: #eff6fb;
  margin: 3rem 0 6rem;
`;

export const Warning = styled.span`
  //background: ${({ state }) => (state ? "blue" : "red")};
  display: ${({ state }) => (state ? "none" : "flex")};
  color: #4e2139;
  font-size: xx-small;
  margin: 0.2rem 0;
  align-items: center;
  svg {
    font-size: x-small;
  }
`;

export const WarningCartName = styled.span`
  background: ${({ stateCartName }) => (stateCartName ? "green" : "red")};
  //display: ${({ state }) => (state ? "none" : "flex")} ;
  color: #4e2139;
  font-size: xx-small;
  margin: 0.2rem 0;
  align-items: center;
  svg {
    font-size: x-small;
  }
`;

export const Select = styled.select`
  background: #1b1e32;
  color: #e8e8ea;
  padding: 0.2rem;
  border-radius: 4px;
  option {
    background: #1b1e32;
    color: #e8e8ea;
  }
`;
