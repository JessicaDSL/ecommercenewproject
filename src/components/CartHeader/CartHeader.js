import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { MdOutlineShoppingCart, MdShoppingCart } from "react-icons/md";

import { Header, CartIcon, Container } from "./styles";
import { ProductContext } from "../../context/ContextApi";

const CartHeader = () => {
  const { cart } = useContext(ProductContext);
  return (
    <Header>
      <Container>
        <div>
          <Link to="/">
            <button>
              <ArrowBackIosIcon />
            </button>
          </Link>
        </div>
        <Link to="/cart/:initial">
          <CartIcon>
            <span>{cart.length}</span>
            {cart.length <= 0 ? <MdOutlineShoppingCart /> : <MdShoppingCart />}
          </CartIcon>
        </Link>
      </Container>
    </Header>
  );
};

export default CartHeader;
