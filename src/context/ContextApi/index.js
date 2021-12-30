import React, { createContext, useState, useEffect } from "react";
export const ProductContext = createContext({});

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [valor, setValor] = useState([0]);
  const [amount, setAmount] = useState([0]);

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
    console.log('item,', product.price)
    const car = product.price
    setValor([...valor, car])
    setCart([...cart, product]);
  }

  
  useEffect(() => {
    const valueTotal = valor.reduce((acc, acm) => acc += acm)
    setAmount(valueTotal)
  }, [valor])

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
        amount
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
