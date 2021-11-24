import React from "react";
import { GoSearch } from "react-icons/go";

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

const ProductList = ({ results = [] }) => {
  return (
    <Container>
      <Header>
        <ImageLogin>
          <h1>Sneakers</h1>
          <img src={Photo} alt="Foto Perfil" />
        </ImageLogin>
        <Search>
          <GoSearch />
          <input placeholder="Search for your sneaker" />
        </Search>
        <hr />
      </Header>
      <List>
        {results.map((item) => (
          <ListItem>
            <ProductCard
              key={item.id}
              id={item.id}
              description={item.description}
              price={item.price}
              photo={item.thumbnailURL}
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default ProductList;
