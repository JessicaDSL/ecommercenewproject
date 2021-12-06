import React, { useState, useEffect, useContext } from "react";

import {formatCurrency} from '../../utils/utils'
import { Container, Info, Btn } from "./styles";
import { ProductContext } from "../../context/ContextApi";

const ProductCard = ({
  description,
  price,
  photo,
  key,
  color,
  id,
  size = [],
  quantity = [],
}) => {
  const { sizeProduct, handleGetSizeOfProduct, handleAddNewProduct } =
    useContext(ProductContext);

  const [quantityValue, setQuantityValue] = useState(1);
  const [totalResult, setTotalResult] = useState(price);

  useEffect(() => {
    const totalValue = quantityValue * price;
    setTotalResult(totalValue);
  }, [quantityValue, price, totalResult]);

  function handleGetQuantityOfProduct(e) {
    setQuantityValue(e.target.value);
    e.preventDefault();
  }


  return (
    <Container>
      <img src={photo} alt={`Foto do produto ${description}`} />
      <h4>{description}</h4>
      <Info>
        Size
        <select value={key} onChange={handleGetSizeOfProduct}>
          {size.map((size) => (
            <option>{size}</option>
          ))}
        </select>
        Quantity
        <select value={key} onChange={(e) => handleGetQuantityOfProduct(e)}>
          {quantity.map((number) => (
            <option key={number.value} value={number.value}>
              {number}
            </option>
          ))}
        </select>
      </Info>

      <h2>${formatCurrency(totalResult)}</h2>
      <Btn
        onClick={() =>
          handleAddNewProduct(quantityValue, color, sizeProduct, id, description, photo, totalResult)
        }
      >
        Add to cart
      </Btn>
    </Container>
  );
};

export default ProductCard;
