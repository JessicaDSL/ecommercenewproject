import styled from "styled-components";

export const Container = styled.div`
color: #909090;
display: flex;
height: 100vh;
width: 100%;
flex-direction: column;
align-items: center;
a {
  color: #4fa5ce;
  text-decoration: underline;
}
img {
  width: 9.5rem;
  margin: 9% 0 0%;
}
p {
  margin: 1.6rem 0;
  font-size: .8rem;
  font-weight: 400;
}
strong {
  position: absolute;
  top: 15%;
}
`;

export const Fieldset = styled.fieldset`
  border: 1px groove #4099d9 !important;
  padding: 0 1.4em 1.6em 1.4em !important;
  margin: 0 0 1.5em 0 !important;
  -webkit-box-shadow: 0px 0px 0px 0px #000;
  box-shadow: 0px 0px 0px 0px #000;
  height: 1.1rem;
  border-radius: 7px;
  font-weight: 500;
  input {
    border: none;
    background: none;
  }
`;

export const Legend = styled.legend`
  font-size: 0.7rem !important;
  text-align: left !important;
  width: auto;
  padding: 0 5px;
  border-bottom: none;
  color: #4099d9;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin-bottom: 3rem;
`;

export const Button = styled.button`
  background: #0078cd;
  border: none;
  border-radius: 4px;
  height: 2.7rem;
  font-weight: 600;
  letter-spacing: .5px;
  color: #eff6fb;
`;

export const Input = styled.input`
  height: 2.4rem;
  border-radius: 7px;
  border: 1px solid #909090 !important;
`;
