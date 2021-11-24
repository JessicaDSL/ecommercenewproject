import React from "react";
import { IoIosArrowBack, IoMdClose } from "react-icons/io";

import { Header } from "./styles";

const HeaderSignBank = ({title}) => {
  return (
    <Header>
      <span>
        <IoIosArrowBack />
      </span>
      <div>
        <h2>{title}</h2>
        <span>Amount: $100.00</span>
      </div>
      <span>
        <IoMdClose />
      </span>
    </Header>
  );
};

export default HeaderSignBank;
