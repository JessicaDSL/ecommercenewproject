/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";


import { banks } from "./mock";
import BankList from "../BankList";
import SearchBank from "../SearchBank/SearchBank";

import { Container } from "./styles";
import HeaderSignBank from "../HeaderSignBank/HeaderSignBank";
import SecureInternetCertificate from "../SecureInternetCertificate/SecureInternetCertificate";

const SelectBank = () => {

  const title = "Select your Bank";

  return (
    <Container>
      <HeaderSignBank title={title} />
      <SearchBank />
      <h5>MOST POPULAR</h5>
      <BankList banks={banks} />
      <h5>ALL BANKS</h5>
      <BankList banks={banks} />
      <SecureInternetCertificate />
    </Container>
  );
};

export default SelectBank;
