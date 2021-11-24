import React from "react";
import { MdOutlineAttachMoney } from "react-icons/md";
import { FaMinusCircle } from "react-icons/fa";

import { Container, Background, Image, Description, Price } from "./styles";

const ProductCart = ({ description, id, color, price, photo }) => {
  return (
    <Background>
      <Container>
        <Image>
          <img src={photo} alt={description} />
        </Image>
        <Description>
          <h3>{description}</h3>
          <p>x1, {color}, Size 41 </p>
          <p>Item #{id}</p>
          <h5>Delivery Details</h5>
          <p>John Smiths</p>
          <p>Phone no: 01312428200</p>
          <p>Address: Redwood City, 2000.</p>
        </Description>
        <span><FaMinusCircle /></span>
      </Container>
      <Price>
        <p>
        <h4>Total Cost</h4> 
        <span>Delivery included</span>
        </p>
        <strong><MdOutlineAttachMoney />100</strong>

      </Price>
    </Background>
  );
};

export default ProductCart;
