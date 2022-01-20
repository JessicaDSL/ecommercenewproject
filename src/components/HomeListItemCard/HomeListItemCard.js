import React, { useState, useEffect, useContext } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { formatCurrency } from "../../utils/utils";
import { ProductContext } from "../../context/ContextApi";

import { ListItem, Info, Btn, Select, Content } from "./styles";

const ListItemCard = ({ item }) => {
  const { handleAddNewProduct } = useContext(ProductContext);

  const [quantityValue, setQuantityValue] = useState(1);
  const [sizeProduct, setSizeProduct] = useState(37);
  const [totalResult, setTotalResult] = useState();

  const sizeOfProduct = item.size;
  const quantityOfProduct = item.quantity;

  useEffect(() => {
    const totalValue = quantityValue * item.price;
    setTotalResult(totalValue);
  }, [quantityValue, totalResult, item.price]);

  return (
    <ListItem>
      <img
        src={item.thumbnailURL}
        alt={`Foto do produto ${item.description}`}
      />
      <h4>{item.description}</h4>
      <Info>
        <h3>Size</h3>
        <Select
          onChange={(e) => setSizeProduct(e.target.value)}
          value={sizeProduct}
        >
          {sizeOfProduct.map((size) => (
            <option key={size}>{size}</option>
          ))}
        </Select>
        <h3>Quantity</h3>
        <Select
          onChange={(e) => setQuantityValue(e.target.value)}
          value={quantityValue}
        >
          {quantityOfProduct.map((number) => (
            <option key={number.value} value={number.value}>
              {number}
            </option>
          ))}
        </Select>
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
      <Content>
        <hr /> <AiOutlineHeart /> <hr />
      </Content>
    </ListItem>
  );
};

export default ListItemCard;
