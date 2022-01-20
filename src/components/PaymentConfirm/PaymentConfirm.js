import React, { useContext } from "react";
import { BsBank2 } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { MdOutlineAttachMoney } from "react-icons/md";

import CartHeader from "../CartHeader";
import Footer from "../Footer";
import PurchasedProduct from "../PurchasedProduct/PurchasedProduct";
import { ProductContext } from "../../context/ContextApi";
import {
  Container,
  CartItens,
  PaymentSelected,
  TotalValue,
  Background,
  Button,
} from "./styles";

const PaymentConfirm = () => {
  const { amount, cart } = useContext(ProductContext);
  const navigate = useNavigate();

  return (
    <Container>
      <CartHeader />
      <h2>Review and confirmation</h2>
      <Background>
        <h3>Order Summary</h3>
        {cart.length > 0 ? (
          cart.map((item) => <PurchasedProduct key={item.id} item={item} />)
        ) : (
          <CartItens>
            <h1>You don't have items in your shopping cart yet! :(</h1>
          </CartItens>
        )}
      </Background>
      <Background>
        <h3>Payment Method</h3>
        <PaymentSelected>
          <BsBank2 />
          <h4>Online Banking</h4>
        </PaymentSelected>
        <TotalValue>
          <div>
            Total cost
            <br />
            <span>Delivery included</span>
          </div>
          <div>
            <b>
              <MdOutlineAttachMoney />
              {amount}
            </b>
          </div>
        </TotalValue>
      </Background>
      <Button onClick={() => navigate("/completedpurchase")}>
        Place order
      </Button>
      <Footer />
    </Container>
  );
};

export default PaymentConfirm;
