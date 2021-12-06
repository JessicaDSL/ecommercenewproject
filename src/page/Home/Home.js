import React from "react";

import ProductList from "../../components/ProductList";
import { ProductProvider } from "../../context/ContextApi";

import { Container } from "./styles";
const Home = () => {
  return (
    <ProductProvider>
      <Container>
        <ProductList />
      </Container>
    </ProductProvider>
  );
};

export default Home;
