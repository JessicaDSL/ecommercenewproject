import React, { useContext, useEffect, useState } from "react";

import { ProductContext } from "../../context/ContextApi";
import CartHeader from "../CartHeader";
import Footer from "../Footer";
import { formatCurrency } from "../../utils/utils";
import {
  Container,
  ProductImage,
  InfoProduct,
  Btn,
  Select,
  Content,
} from "./styles";

const ProductItem = () => {
  const { cartItem, handleAddNewProduct } = useContext(ProductContext);

  console.log(cartItem);
  const [sizeProduct, setSizeProduct] = useState(37);
  const [quantityValue, setQuantityValue] = useState(1);
  const [totalResult, setTotalResult] = useState();

  const size = cartItem.size;
  const quantity = cartItem.quantity;
  console.log(cartItem.price, "cartItem");

  useEffect(() => {
    const totalValue = quantityValue * cartItem.price;
    setTotalResult(totalValue);
  }, [quantityValue, cartItem.price]);

  return (
    <Container>
      <header>
        <CartHeader />
      </header>
      <Content>
        <ProductImage>
          <img src={cartItem?.maxresURL} alt={cartItem.description} />
        </ProductImage>

        <InfoProduct>
          <h3>{cartItem.description}</h3>

          <div>
            <h4>Size</h4>
            <Select
              onChange={(e) => setSizeProduct(e.target.value)}
              value={sizeProduct}
            >
              {size.map((size) => (
                <option key={size}>{size}</option>
              ))}
            </Select>

            <h4>Quantity</h4>
            <Select
              onChange={(e) => setQuantityValue(e.target.value)}
              value={quantityValue}
            >
              {quantity.map((number) => (
                <option key={number.value} value={number.value}>
                  {number}
                </option>
              ))}
            </Select>
          </div>
          <h2>${formatCurrency(totalResult)}</h2>
          <Btn
            onClick={() =>
              handleAddNewProduct(
                quantityValue,
                cartItem.color,
                sizeProduct,
                cartItem.id,
                cartItem.description,
                cartItem.thumbnailURL,
                totalResult
              )
            }
          >
            Add to cart
          </Btn>
        </InfoProduct>
      </Content>
      <Footer />
    </Container>
  );
};

export default ProductItem;
