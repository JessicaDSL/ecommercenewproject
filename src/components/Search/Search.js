import React, { useState, useEffect, useContext } from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import { ProductContext } from "../../context/ContextApi";
import { useNavigate, Link } from "react-router-dom";

import { Container, Form } from './styles'
//alterar para SearchProduct
const Search = () => {
  const { products, handleSearch, cartItem, setCartItem } = useContext(ProductContext);
  const [text, setText] = useState("");
  const [state, setState] = useState(false)

  
  let navigate = useNavigate();
  

  const onChangeHandler = (e) => {
    setText(e.target.value);
  };


  

  function handleClickSubmit(e) {
    //console.log(e.target.innerText);
    console.log(e);
  }

  useEffect(() => {
    text <= 0 ? setState(false) : setState(true)
  }, [text])

  useEffect((names) => {
    
  }, [text])

  return (
    <div>
      <Form state={state}>
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => onChangeHandler(e)}
        />
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
          .map((names) => (
            <ul>
              <li>
                <Link to={`/cartitem`} onClick={()=>{
                  handleSearch(names)}}> {names.description}</Link>
              </li>
            </ul>
          ))}
      </Form>
    </div>
  );
};

export default Search;

/*<Stack spacing={2} sx={{ width: 300 }}>
      
      <Autocomplete
        freeSolo
        onClick={handleClick}
        id="free-solo-2-demo"
        disableClearable
        options={products.map((option) => option.description)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search"
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
          />
        )}
      />
    </Stack>*/
