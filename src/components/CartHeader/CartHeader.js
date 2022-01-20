import React from "react";
import { Link } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

import Photo from "../../assets/image/Jessy.jpeg";
import { Header } from "./styles";

const CartHeader = () => {
  return (
    <Header>
      <div>
        <Link to="/">
          <button>
            <IoArrowBack /> <span>Back</span>
          </button>
        </Link>
      </div>
      <Link to="/cart/:initial">
        <div>
          <img src={Photo} alt="Foto Perfil" />
        </div>
      </Link>
    </Header>
  );
};

export default CartHeader;
