import React, { useContext } from "react";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

import { ProductContext } from "../../context/ContextApi";

import { Container, Background, Image, Description } from "./styles";

const PurchasedProduct = ({ item }) => {
  const { handleDeleteItem } = useContext(ProductContext);

  return (
    <Background>
      <Container>
        <Image>
          <img src={item.photo} alt={item.name} />
        </Image>
        <Description>
          <div>
            <h2>{item.name}</h2>
          </div>
          <div>
            <p>
              x{item.quantity}, {item.color}, Size {item.size}
              <br />
              Item #{item.id}
            </p>
          </div>
        </Description>
        <div>
          <button onClick={() => handleDeleteItem(item)}>
            <RemoveCircleIcon />
          </button>
        </div>
      </Container>
    </Background>
  );
};

export default PurchasedProduct;
