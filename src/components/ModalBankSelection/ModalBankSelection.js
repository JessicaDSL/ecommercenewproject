/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState, useEffect} from "react";


import { banks } from "./mock";
import BankList from "../BankList";
import SearchBank from "../SearchBank/SearchBank";

import { Container } from "./styles";


import SecureInternetCertificate from "../SecureInternetCertificate/SecureInternetCertificate";
import HeaderModal from "../HeaderModal";

const ModalBankSelection = ({handleClick}) => {

  const title = "Select your Bank";
  const link = "continue"
  

  return (
    <Container>
      <HeaderModal title={title} onClick={()=>handleClick(link)} />
      <SearchBank />
      <h5>MOST POPULAR</h5>
      <BankList banks={banks} />
      <h5>ALL BANKS</h5>
      <BankList banks={banks} />
      <SecureInternetCertificate />
    </Container>
  );
};

export default ModalBankSelection;
