import React, { useContext } from "react";
import { GoSearch } from "react-icons/go";
import { ProductContext } from "../../context/ContextApi";

import Photo from "../../assets/image/Jessy.jpg";
import ProductCard from "../ProductCard";

import {
  Container,
  Header,
  ImageLogin,
  Search,
  List,
  ListItem,
} from "./styles";
import { Link } from "react-router-dom";

const ProductList = () => {
  const { products } = useContext(ProductContext);

  return (
    <Container>
      <Header>
        <ImageLogin>
          <h1>Sneakers</h1>
          <Link to="/productcart">
            <img src={Photo} alt="Foto Perfil" />
          </Link>
        </ImageLogin>
        <Search>
          <GoSearch />
          <input placeholder="Search for your sneaker" />
        </Search>
        <hr />
      </Header>
      <List>
        <ListItem>
          {products.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </ListItem>
      </List>
    </Container>
  );
};

export default ProductList;
