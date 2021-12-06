import React, { createContext, useEffect, useState } from "react";
import api from "../../services/api";
export const ProductContext = createContext({});

export const ProductProvider = ({ children }) => {
  
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [sizeProduct, setSizeProduct] = useState();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchProduct = () => {
    return api
      .get("sneakers/index.json")
      .then(({ data }) => {
        const products = data?.results?.map((item) => {
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
        return setProducts(products);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  function handleGetSizeOfProduct(e) {
    setSizeProduct(e.target.value);
  }

  function handleAddNewProduct(quantityValue, color, sizeProduct, id, description, photo, totalResult) {
    const product =
      {
        quantity: quantityValue,
        color: color,
        size: sizeProduct,
        id: id,
        name: description,
        photo: photo,
        price: totalResult,
      }
    setCart([ ...cart, product ]);
  }

  return (
    <ProductContext.Provider
      value={{
        cart,
        products,
        sizeProduct,
        handleGetSizeOfProduct,
        handleAddNewProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
