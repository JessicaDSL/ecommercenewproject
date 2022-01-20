import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h4 {
    width: 80%;
    margin: 0.8rem 0;
    font-size: x-large;
  }
  h3 {
    width: 80%;
    margin: 1.2rem 0;
    font-size: medium;
    color: #cfcfd3;
  }
`;

export const AppleLogo = styled.div`
  width: 100%;
  margin: 1rem 0 3rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  svg {
    font-size: xx-large;
    color: #fd7b9b;
  }
`;

export const List = styled.ul`
  width: 80%;
`;

export const ListItem = styled.ul`
  margin: 0;
  color: #85889a;
  b {
    font-size: large;
    font-weight: 600;
    color: #cfcfd3;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin: 0 0 1rem 0;
  div {
    border: 1px solid #fff;
    padding: 1rem;
    &:first-child {
      border-radius: 4px 4px 0 0;
      border-bottom: none;
    }
    &:nth-child(3) {
      border-top: none;
      border-radius: 0 0 4px 4px;
    }
  }
  input {
    margin: 0 0.5rem 0 0;
  }
  label {
    color: #85889a;
    b {
      color: #fff;
    }
  }
`;

export const Content = styled.div`
  width: 96%;
  margin: 1.6rem;
  display: flex;
  align-items: center;
  hr {
    width: 40%;
    border: 0.001rem solid #1b1e32;
  }
  svg {
    margin: 0 1rem;
    color: #1b1e32;
    font-size: xx-large;
    font-weight: 300;
  }
  ${media.greaterThan("small")`
  display: none;
    `}
`;

export const Button = styled.button`
  background: ${({ checked }) => (checked ? "gray" : "#fe4370")};
  margin: 2rem 0 4rem 0;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: x-large;
  border: none;
  font-weight: 600;
  letter-spacing: 0.5px;
  width: 100%;
  height: 2.6rem;
  border-radius: 4px;
  svg {
    font-size: x-large;
  }
  cursor: ${({ checked }) => (checked ? "pointer" : "not-allowed")}
    ${media.greaterThan("large")`
  height: xx-large;
  height: 3rem;
  `};
`;
