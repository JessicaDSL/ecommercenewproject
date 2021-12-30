import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import api from "../../services/api";
import Photo from "../../assets/image/Jessy.jpg";

import { ProductContext } from "../../context/ContextApi";
import Search from "../../components/Search/Search";
import HomeProductList from "../../components/HomeProductList";

import { Container, Header, ImageLogin } from "./styles";

const Home = () => {
  const { setProducts } = useContext(ProductContext);

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
      <Header>
        <ImageLogin>
          <h1>Sneakers</h1>
          <Link to="/cart/initial">
            <img src={Photo} alt="Foto Perfil" />
          </Link>
        </ImageLogin>
      </Header>
      <Search />
      <HomeProductList />
    </Container>
  );
};

export default Home;
