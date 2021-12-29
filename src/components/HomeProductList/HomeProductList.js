import React, { useContext } from "react";
import { ProductContext } from "../../context/ContextApi";

import ListItemCard from "../ProductCard";

import { List, ListItem } from "./styles";

const HomeProductList = () => {
  const { products } = useContext(ProductContext);

  return (
    <List>
      <ListItem>
        {products.map((item) => (
          <ListItemCard key={item.id} item={item} />
        ))}
      </ListItem>
    </List>
  );
};

export default HomeProductList;
