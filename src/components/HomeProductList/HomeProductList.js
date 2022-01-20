import React, { useContext } from "react";

import { ProductContext } from "../../context/ContextApi";
import HomeListItemCard from "../HomeListItemCard";

import { List } from "./styles";

const HomeProductList = () => {
  const { products } = useContext(ProductContext);

  return (
    <List>
      {products.map((item) => (
        <HomeListItemCard key={item.id} item={item} />
      ))}
    </List>
  );
};

export default HomeProductList;
