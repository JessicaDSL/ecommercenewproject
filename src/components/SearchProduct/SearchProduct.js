import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GrSearch } from "react-icons/gr";
//import SearchIcon from '@material-ui/icons/Search';
//import { SearchIcon, ThreeDRotation } from '@mui/icons-material'
import SearchIcon from "@mui/icons-material/Search";

import { ProductContext } from "../../context/ContextApi";

import { Form } from "./styles";

const SearchProduct = () => {
  const { products, handleSearch } = useContext(ProductContext);
  const [text, setText] = useState("");
  const [state, setState] = useState(false);

  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    setText(e.target.value);
  };

  useEffect(() => {
    text <= 0 ? setState(false) : setState(true);
  }, [text]);

  return (
    <Form state={state}>
      <div>
        <SearchIcon />
        <input
          type="text"
          placeholder="Search for our sneaker"
          onChange={(e) => onChangeHandler(e)}
        />
      </div>
      <hr />
      {products
        .filter((word) => {
          if (text === "") {
            return word;
          } else if (
            word.description
              .toLocaleLowerCase()
              .includes(text.toLocaleLowerCase())
          ) {
            return word;
          }
        })
        .map((product) => (
          <ul>
            <li
              onClick={() => {
                navigate("/cartitem");
                handleSearch(product);
              }}
            >
              {product.description}
            </li>
          </ul>
        ))}
    </Form>
  );
};

export default SearchProduct;
