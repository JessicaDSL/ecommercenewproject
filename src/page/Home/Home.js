import React, {useContext, useEffect} from "react";

import api from '../../services/api'
import ProductList from "../../components/ProductList";

import { Container } from "./styles";
import { ProductContext } from "../../context/ContextApi";

const Home = () => {

  const {setProducts} = useContext(ProductContext)

  const fetchProduct = () => {
    return api
      .get("sneakers/index.json")
      .then(({ data }) => {
        const productList = data?.results?.map((item) => {
          const id = item?.id;
          const description = item?.description;
          const color = item?.color;
          const price = parseInt(item?.price);
          const thumbnailURL = item?.thumbnailURL;
          const maxresURL = item?.maxresURL;
          const size = [37, 38, 39, 40, 41, 45, 46];
          const quantity = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
          return {
            id,
            description,
            color,
            price,
            thumbnailURL,
            maxresURL,
            size,
            quantity,
          };
        });
        return setProducts(productList);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchProduct();
  }, []);
  
  return (
    <Container>
      <ProductList />
    </Container>
  );
};

export default Home;
