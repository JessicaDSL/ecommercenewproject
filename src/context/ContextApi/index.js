/* eslint-disable eqeqeq */
import React, { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

export const ProductContext = createContext({});

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [valor, setValor] = useState([0]);
  const [amount, setAmount] = useState([0]);
  const [open, setOpen] = useState();
  const [title, setTitle] = useState();
  const [cartItem, setCartItem] = useState();
  const [bankFlag, setBankFlag] = useState([]);
  const [url, setUrl] = useState();

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

    const hasSameItem = cart.some((car) => car.id === product.id);

    !hasSameItem
      ? setCart([...cart, product])
      : toast.error("Esse item já esta no carrinho!", {
          theme: "dark",
        });
    if (!hasSameItem) {
      toast.success("Item adicionado com sucesso!", {
        theme: "dark",
      });
    }
    const car = product.price;
    setValor([...valor, car]);
    setOpen(true);
  }

  useEffect(() => {
    const valueTotal = valor.reduce((acc, acm) => (acc += acm));
    setAmount(valueTotal);
  }, [valor]);

  function getBankFlag(name, image) {
    const data = {
      name: name,
      image: image,
    };
    setBankFlag(data);
  }

  function handleDeleteItem(item) {
    const newListProduct = cart.filter((list) => list.id !== item.id);
    setCart(newListProduct);
  }

  function handleSearch(product) {
    setCartItem(product);
  }

  function clearCart() {
    setCart([]);
  }

  function getUrl(urls) {
    setUrl(urls);
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
        title,
        setTitle,
        bankFlag,
        getBankFlag,
        cartItem,
        clearCart,
        getUrl,
        url,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
