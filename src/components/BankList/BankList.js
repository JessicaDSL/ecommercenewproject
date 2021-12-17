import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import BankListCard from "../BankListCard";

import { Container } from "./styles";

const BankList = ({ banks = [] }) => {
  console.log(banks);
  return (
    <Container>
      <ul>
          {banks.map((item) => (
            <Link to='/continue'>
              <li>
              <BankListCard
                key={item.id}
                image={item.image}
                url={item.url}
                name={item.name}
              />
              <IoIosArrowForward />
            </li>
            </Link>
          ))}
      </ul>
    </Container>
  );
};

export default BankList;
