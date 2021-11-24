import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import BankListCard from "../BankListCard";

import { Container } from "./styles";

const BankList = ({ banks = [] }) => {
  console.log(banks);
  return (
    <Container>
      <ul>
          {banks.map((item) => (
            <li>
              <BankListCard
                key={item.id}
                image={item.image}
                url={item.url}
                name={item.name}
              />
              <IoIosArrowForward />
            </li>
          ))}
      </ul>
    </Container>
  );
};

export default BankList;
