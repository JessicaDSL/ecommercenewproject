import React, { useContext } from "react";
import { IoIosArrowBack, IoMdClose } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";

import { ProductContext } from "../../context/ContextApi";
import { formatCurrency } from "../../utils/utils";

import { Header } from "./styles";

const HeaderModal = () => {
  let navigate = useNavigate();
  const { amount, title } = useContext(ProductContext);
  return (
    <Header>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        <IoIosArrowBack />
      </button>
      <div>
        <h2>{title}</h2>
        <span>Amount: ${formatCurrency(amount)}</span>
      </div>
      <Link to="/cart/initial">
        <button>
          <IoMdClose />
        </button>
      </Link>
    </Header>
  );
};

export default HeaderModal;
