import React, { useState, useEffect, useContext } from "react";

import { formatCurrency } from "../../utils/utils";
import { Container, Info, Btn } from "./styles";
import { ProductContext } from "../../context/ContextApi";

const ListItemCard = ({ item }) => {
  const size = item.size;
  const quantity = item.quantity;

  const { handleAddNewProduct } = useContext(ProductContext);

  const [quantityValue, setQuantityValue] = useState(1);
  const [sizeProduct, setSizeProduct] = useState(37);
  const [totalResult, setTotalResult] = useState(item.price);

  useEffect(() => {
    const totalValue = quantityValue * item.price;
    setTotalResult(totalValue);
  }, [quantityValue, item.price, totalResult]);

  return (
    <Container>
      <img
        src={item.thumbnailURL}
        alt={`Foto do produto ${item.description}`}
      />
      <h4>{item.description}</h4>
      <Info>
        Size
        <select
          onChange={(e) => setSizeProduct(e.target.value)}
          value={sizeProduct}
        >
          {size.map((size) => (
            <option>{size}</option>
          ))}
        </select>
        Quantity
        <select
          onChange={(e) => setQuantityValue(e.target.value)}
          value={quantityValue}
        >
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
          handleAddNewProduct(
            quantityValue,
            item.color,
            sizeProduct,
            item.id,
            item.description,
            item.maxresURL,
            totalResult
          )
        }
      >
        Add to cart
      </Btn>
    </Container>
  );
};

export default ListItemCard;
