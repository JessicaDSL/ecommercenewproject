import React, { useContext, useState, useEffect } from "react";
import { BsBank2 } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { MdOutlineAttachMoney } from "react-icons/md";
import { toast } from "react-toastify";

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
  Product,
} from "./styles";

const PaymentConfirm = () => {
  const { amount, cart, url } = useContext(ProductContext);
  const navigate = useNavigate();

  const [paymentMethod, setPaymentMethod] = useState("");

  useEffect(() => {
    function handleUrl() {
      if (url === "/selectbank") {
        setPaymentMethod("Online Banking");
      } else if (url === "/cardpayment") {
        setPaymentMethod("Payment by Credit Card");
      } else if (url === "/applepayment") {
        setPaymentMethod("Apple Pay");
      } else {
        setPaymentMethod("No Method Selected");
      }
    }

    handleUrl();
  }, [url]);

  return (
    <Container>
      <CartHeader />
      <h2>Review and confirmation</h2>
      <Background>
        <h3>Order Summary</h3>
        <Product>
          {cart.length > 0 ? (
            cart.map((item) => <PurchasedProduct key={item.id} item={item} />)
          ) : (
            <CartItens>
              <h1>You don't have items in your shopping cart yet! :(</h1>
            </CartItens>
          )}
        </Product>
      </Background>
      <Background>
        <h3>Payment Method</h3>
        <PaymentSelected>
          <BsBank2 />
          <h4>{paymentMethod}</h4>
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
      <Button onClick={() => {if (cart <= 0) {
            toast.error("Cart is empty, please select a product!", {
              theme: "dark",
            }) } else {navigate("/completedpurchase")}} }>
        Place order
      </Button>
      <Footer />
    </Container>
  );
};

export default PaymentConfirm;
