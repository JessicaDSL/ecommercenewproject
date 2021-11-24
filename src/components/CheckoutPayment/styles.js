import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
display: flex;
width: 96%;
flex-direction: column;
justify-content: center;
h2 {
  font-weight: 500;
  margin: 0 0 1rem 0;
}
h3 {
  font-weight: 500;
  font-size: 1rem;
}

${media.greaterThan("medium")`
h2 {
  display: none;
}
  `}
`;

export const Login = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-content: center;
margin: .5rem 0 1rem 0;
img  {
  border-radius: 80%;
  width: 1.6rem;
  height: 1.5rem;
}
button {
  display: flex;
  background: rgba(0, 0, 0, .05);
  border: none;
  border-radius: 10px;
  padding: 0.2rem .8rem;
  
  font-size: medium;
}
span {
  font-weight: bolder;
  margin: 0 0 0 .2rem ;
}
`

export const CheckoutLine = styled.div`
display: none;
width: 40%;
justify-content: center;
align-items: center;
font-size: .7rem;
margin: 2rem 0;
h1 {
  display: none;
}
hr {
  width: 58%;
  height: 1px;
  position: absolute;
  top: 13.5%;
  right: 21%;
  background: #e8e8e8;
  border: none;
}
div {
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
  width: 30%;
}
img {
  width: .9rem;
  border-top-width: medium;
}
${media.greaterThan("medium")`
    display: flex;
    height: 3rem;
    width: 100%;
  `}
`

export const ProductInfo = styled.div`

`