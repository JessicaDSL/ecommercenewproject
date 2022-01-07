import React, { useContext } from "react";
import { MdOutlineAttachMoney } from "react-icons/md";
import { FaMinusCircle } from "react-icons/fa";

import { ProductContext } from "../../context/ContextApi";

import { Container, Background, Image, Description, Price } from "./styles";

const CardListItem = ({ item }) => {
  const { handleDeleteItem } = useContext(ProductContext);

  return (
    <Background>
      <Container>
        <Image>
          <img src={item.photo} alt={item.description} />
        </Image>
        <Description>
          <h3>{item.name}</h3>
          <p>
            x{item.quantity}, {item.color}, Size {item.size}{" "}
          </p>
          <p>Item #{item.id}</p>
          <h5>Delivery Details</h5>
          <p>John Smiths</p>
          <p>Phone no: 01312428200</p>
          <p>Address: Redwood City, 2000.</p>
        </Description>
        <button onClick={() => handleDeleteItem(item)}>
          <FaMinusCircle />
        </button>
      </Container>
      <Price>
        <p>
          <h4>Total Cost</h4>
          <span>Delivery included</span>
        </p>
        <strong>
          <MdOutlineAttachMoney />
          {item.price}
        </strong>
      </Price>
    </Background>
  );
};

export default CardListItem;
