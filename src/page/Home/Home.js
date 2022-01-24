/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdOutlineShoppingCart, MdShoppingCart } from "react-icons/md";

import api from "../../services/api";
import Footer from "../../components/Footer/Footer";
import SearchProduct from "../../components/SearchProduct";
import HomeProductList from "../../components/HomeProductList";
import { ProductContext } from "../../context/ContextApi";

import { Container, Header, CartIcon } from "./styles";

const Home = () => {
  const { setProducts, cart } = useContext(ProductContext);
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
        <h1>Sneakers</h1>
        <h2>GoJessyStore</h2>
        <Link to="/cart/initial">
          <CartIcon>
            <span>{cart.length}</span>
            {cart.length <= 0 ? <MdOutlineShoppingCart /> : <MdShoppingCart />}
          </CartIcon>
        </Link>
      </Header>
      <SearchProduct />
      <HomeProductList />
      <Footer />
    </Container>
  );
};

export default Home;
