/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from "react";

import { banks } from "./mock";
import BankList from "../BankList";
import { ProductContext } from "../../context/ContextApi";

import { Container } from "./styles";

import SecureInternetCertificate from "../SecureInternetCertificate/SecureInternetCertificate";
import HeaderModal from "../HeaderModal";

const SelectBankFlag = () => {
  const { title, setTitle } = useContext(ProductContext);
  setTitle("Select your Bank");

  return (
    <Container>
      <HeaderModal title={title} />
      <h5>MOST POPULAR</h5>
      <BankList banks={banks} />
      <h5>ALL BANKS</h5>
      <BankList banks={banks} />
      <SecureInternetCertificate />
    </Container>
  );
};

export default SelectBankFlag;
