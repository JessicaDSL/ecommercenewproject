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

const ProductList = () => {
  const { products } = useContext(ProductContext);

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
        <ListItem>
          {products.map((item, key) => (
            <ProductCard
              key={key}
              id={item.id}
              description={item.description}
              price={item.price}
              photo={item.thumbnailURL}
              size={item.size}
              quantity={item.quantity}
              color={item.color}
            />
          ))}
        </ListItem>
      </List>
    </Container>
  );
};

export default ProductList;
