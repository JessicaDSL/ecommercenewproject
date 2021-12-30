import React, { useContext } from "react";
import { IoArrowBack } from "react-icons/io5";
import { Link } from "react-router-dom";

import Photo from "../../assets/image/Jessy.jpg";

import ProgressBar from "../../components/ProgressBar";
import { ProductContext } from "../../context/ContextApi";
import SelectPaymentMethod from "../../components/SelectPaymentMethod";
import CardListItem from "../../components/CardListItem";

import { Container, Header, ProductInfo } from "./styles";

const Cart = () => {
  const { cart } = useContext(ProductContext);

  return (
    <Container>
      <Header>
        <Link to="/">
          <button>
            <IoArrowBack /> <span>Back</span>
          </button>
        </Link>
        <h1>Review and Confirmation</h1>
        <img src={Photo} alt="Foto Perfil" />
      </Header>

      <h2>Checkout</h2>
      <ProgressBar />
      <ProductInfo>
        {cart.map((item) => (
          <CardListItem key={item.id} item={item} />
        ))}
      </ProductInfo>
      <h3>Payment method</h3>
      <SelectPaymentMethod />
    </Container>
  );
};

export default Cart;
