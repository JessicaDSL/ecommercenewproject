import React from "react";
import { IoArrowBack } from "react-icons/io5";
import { BsBank2 } from "react-icons/bs";
import { MdOutlineAttachMoney } from "react-icons/md";

import Photo from "../../assets/image/Jessy.jpg";
import { Container, Login, Background, List, ListItem, Button } from "./styles";

const PaymentConfirmation = ({ product = [] }) => {
  return (
    <Container>
      <Login>
        <button>
          <IoArrowBack /> <span>Back</span>
        </button>
        <img src={Photo} alt="Foto Perfil" />
      </Login>
      <h2>Review and confirmation</h2>
      <Background>
        <h3>Order Summary</h3>
        <div>
          <img
            src={product[0].thumbnailURL}
            alt={`Logo do ${product[0].thumbnailURL}}`}
          />
          <p>
            <h4>{product[0].description}</h4>
            <h6>x 1, {product[0].color}, Size 41</h6>
            <h6>Item #{product[0].id}</h6>
          </p>
        </div>
      </Background>
      <Background>
        <h3>Payment Method</h3>
        <List>
          <ListItem>
            <BsBank2 />
            <h4>Online Banking</h4>
          </ListItem>
          <ListItem>
            <div>
              <b>Total cost</b>
              <span>Delivery included</span>
            </div>
            <p>
              <MdOutlineAttachMoney />
              100
            </p>
          </ListItem>
        </List>
      </Background>
      <Button>Place order</Button>
    </Container>
  );
};

export default PaymentConfirmation;
