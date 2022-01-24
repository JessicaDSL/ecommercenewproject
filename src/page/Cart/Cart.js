import React, { useContext } from "react";

import SelectPaymentMethod from "../../components/SelectPaymentMethod";
import CardListItem from "../../components/CardListItem";
import Footer from "../../components/Footer";
import CartHeader from "../../components/CartHeader/CartHeader";
import { ProductContext } from "../../context/ContextApi";

import { Container, CartItens, CartListProduct } from "./styles";

const Cart = () => {
  const { cart } = useContext(ProductContext);
  return (
    <Container>
      <header>
        <CartHeader />
      </header>
      <h2>Checkout</h2>
      <CartListProduct>
        {cart.length > 0 ? (
          cart.map((item) => <CardListItem key={item.id} item={item} />)
        ) : (
          <CartItens>
            <h1>You don't have items in your shopping cart yet! :(</h1>
          </CartItens>
        )}
      </CartListProduct>

      <h6>Payment method</h6>
      <SelectPaymentMethod />
      <Footer />
    </Container>
  );
};

export default Cart;
