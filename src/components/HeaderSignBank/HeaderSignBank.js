import React from "react";
import { IoIosArrowBack, IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

import { Header } from "./styles";

const HeaderSignBank = ({title}) => {
  return (
    <Header>
      <Link to='/productcart'>
      <span>
        <IoIosArrowBack />
      </span>
      </Link>
      <div>
        <h2>{title}</h2>
        <span>Amount: $100.00</span>
      </div>
      <Link to='/'>
      <span>
        <IoMdClose />
      </span>
      </Link>
    </Header>
  );
};

export default HeaderSignBank;
