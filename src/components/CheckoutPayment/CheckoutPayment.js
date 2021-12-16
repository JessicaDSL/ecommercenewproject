import React, { useContext } from "react";
import { IoArrowBack } from "react-icons/io5";

import Photo from "../../assets/image/Jessy.jpg";
import checked from "../../assets/image/checked.png";
import PaymentMethod from "../PaymentMethod";
import ProductCart from "../ProductCart/ProductCart";

import { ProductContext } from "../../context/ContextApi";
import { Container, Login, CheckoutLine, ProductInfo } from "./styles";
import { Link } from "react-router-dom";

const CheckoutPayment = () => {
  const { cart } = useContext(ProductContext);

  return (
    <Container>
      <div>
        <Login>
          <Link to='/'>
          <button>
            <IoArrowBack /> <span>Back</span>
          </button>
          </Link>
          <h1>Review and Confirmation</h1>
          <img src={Photo} alt="Foto Perfil" />
        </Login>
      </div>
      <h2>Checkout</h2>
      <CheckoutLine>
        <div>
          <img src={checked} alt="check" />
          Cart
        </div>
        <hr />
        <div>
          <img src={checked} alt="check" />
          Payment options
        </div>
        <div>
          <img src={checked} alt="check" />
          Receipt
        </div>
      </CheckoutLine>
      <ProductInfo>
        {cart.map((item) => (
          <ProductCart
            key={item.id}
            item={item}
          />
        ))}
      </ProductInfo>
      <h3>Payment method</h3>
      <PaymentMethod />
    </Container>
  );
};

export default CheckoutPayment;
