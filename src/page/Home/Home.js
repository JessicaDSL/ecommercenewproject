import React from "react";

import CheckoutPayment from '../../components/CheckoutPayment'
//import { results } from "./content";

import { Container } from "./styles";
const product = [
  {
    id: "2839u512401",
    description: "SS Sneaker",
    color: "Green",
    price: "100.00",
    currency: "USD",
    thumbnailURL:
      "https://voliveira.s3-sa-east-1.amazonaws.com/sneakers/ss-sneaker-thumb.png",
    maxresURL:
      "https://voliveira.s3-sa-east-1.amazonaws.com/sneakers/ss-sneaker-maxres.png",
  },
];

const Home = () => {
  return (
    <Container>
      <CheckoutPayment product={product} />
    </Container>
  );
};

export default Home;
