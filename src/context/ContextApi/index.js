import React, { createContext, useState, useEffect } from "react";

export const ProductContext = createContext({});

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [valor, setValor] = useState([0]);
  const [amount, setAmount] = useState([0]);
  const [open, setOpen] = useState();
  const [title, setTitle] = useState();
  const [cartItem, setCartItem] = useState()

 

  function handleAddNewProduct(
    quantityValue,
    colorOfProduct,
    sizeProduct,
    idOfProduct,
    nameOfProduct,
    bigPhotoProduct,
    totalResult
  ) {
    const product = {
      quantity: quantityValue,
      color: colorOfProduct,
      size: sizeProduct,
      id: idOfProduct,
      name: nameOfProduct,
      photo: bigPhotoProduct,
      price: totalResult,
    };
    const car = product.price
    console.log('name', nameOfProduct)
    setValor([...valor, car])
    setCart([...cart, product]);
    setOpen(true);
  }

  
  
  useEffect(() => {
    const valueTotal = valor.reduce((acc, acm) => acc += acm)
    setAmount(valueTotal)
  }, [valor])

  function handleDeleteItem(item) {
    const newListProduct = cart.filter((list) => list.id !== item.id);
    setCart(newListProduct);
  }

  function handleSearch(names) {
    setCartItem(names)
  }

  


  return (
    <ProductContext.Provider
      value={{
        cart,
        products,
        setProducts,
        handleAddNewProduct,
        handleDeleteItem,
        amount,
        open,
        handleSearch,
        title, setTitle,
        cartItem, setCartItem
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
