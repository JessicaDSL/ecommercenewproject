import React, { createContext, useState } from "react";
export const ProductContext = createContext({});

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  function handleAddNewProduct(
    quantityValue,
    color,
    sizeProduct,
    id,
    description,
    photo,
    totalResult
  ) {
    const product = {
      quantity: quantityValue,
      color: color,
      size: sizeProduct,
      id: id,
      name: description,
      photo: photo,
      price: totalResult,
    };
    setCart([...cart, product]);
  }

  function handleDeleteItem(item) {
    const newListProduct = cart.filter((list) => list.id !== item.id);
    setCart(newListProduct);
  }

  return (
    <ProductContext.Provider
      value={{
        cart,
        products,
        setProducts,
        handleAddNewProduct,
        handleDeleteItem,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
