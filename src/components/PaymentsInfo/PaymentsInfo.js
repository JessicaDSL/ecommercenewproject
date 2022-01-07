import React, { useContext } from "react";
import { IoArrowBack } from "react-icons/io5";
import { BsBank2 } from "react-icons/bs";
import { MdOutlineAttachMoney } from "react-icons/md";

import Photo from "../../assets/image/Jessy.jpg";
import { ProductContext } from "../../context/ContextApi";
import { Container, Login, Background, List, ListItem, Button } from "./styles";
import { Link } from "react-router-dom";

const PaymentsInfo = ({ product = [] }) => {
  const { amount } = useContext(ProductContext);

  return (
    <Container>
      <Login>
        <Link to="/">
          <button>
            <IoArrowBack /> <span>Back</span>
          </button>
        </Link>
        <Link to="/cart/initial">
          <img src={Photo} alt="Foto Perfil" />
        </Link>
      </Login>
      <h2>Review and confirmation</h2>
      <Background>
        <h3>Order Summary</h3>
        <div></div>
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
              {amount}
            </p>
          </ListItem>
        </List>
      </Background>
      <Link to="/completedpurchase">
        <Button>Place order</Button>
      </Link>
    </Container>
  );
};

export default PaymentsInfo;
