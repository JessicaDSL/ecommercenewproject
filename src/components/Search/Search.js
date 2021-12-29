import React from "react";
import { GoSearch } from "react-icons/go";

import { Container } from "./styles";

const Search = () => {
  return (
    <Container>
      <div>
        <GoSearch />
        <input placeholder="Search for your sneaker" />
      </div>
      <hr />
    </Container>
  );
};

export default Search;
