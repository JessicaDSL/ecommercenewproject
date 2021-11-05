import React from "react";
import { GoSearch } from "react-icons/go";

import { Container } from "./styles";

const Search = () => {
  return (
    <Container>
      <span><GoSearch /></span>
      <input placeholder="Search for your sneaker" />
    </Container>
  );
};

export default Search;
