import React, { useState, useEffect, useContext } from "react";

import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

import { formatCurrency } from "../../utils/utils";
import { Container, Info, Btn } from "./styles";
import { ProductContext } from "../../context/ContextApi";

const ListItemCard = ({ item }) => {
  const { handleAddNewProduct, cartItem } = useContext(ProductContext);

  const [sizeOfProduct, setSizeOfProduct] = useState([]);
  const [quantityOfProduct, setQuantityOfProduct] = useState([]);
  const [quantityValue, setQuantityValue] = useState(1);
  const [sizeProduct, setSizeProduct] = useState(37);
  const [totalResult, setTotalResult] = useState();
  const [priceOfProduct, setPriceOfProduct] = useState(37);
  const [photoOfProduct, setPhotoOfResult] = useState();
  const [nameOfProduct, setNameOfResult] = useState();
  const [colorOfProduct, setColorOfResult] = useState();
  const [idOfProduct, setIdOfResult] = useState();
  const [bigPhotoProduct, setBigPhotoProduct] = useState();
  const [descriptionOfProduct, setDescriptionOfResult] = useState();

  

  useEffect(() => {
    function HandlePrice() {
      if (item !== undefined) {
        setSizeOfProduct(item.size);
        setPriceOfProduct(item.price);
        setColorOfResult(item.color)
        setQuantityOfProduct(item.quantity);
        setIdOfResult(item.id)
        setDescriptionOfResult(item.description)
        setBigPhotoProduct(item.maxresURL)
        setPhotoOfResult(item.thumbnailURL);
        setNameOfResult(item.description);
      } else if (cartItem !== undefined) {
        setPriceOfProduct(cartItem?.price);
        setColorOfResult(cartItem?.color)
        setQuantityOfProduct(cartItem?.quantity);
        setIdOfResult(cartItem?.id);
        setSizeOfProduct(cartItem?.size);
        setDescriptionOfResult(cartItem?.description)
        setBigPhotoProduct(cartItem?.maxresURL)
        setPhotoOfResult(cartItem?.thumbnailURL);
        setNameOfResult(cartItem?.description);
      }
    }
    HandlePrice();
  }, [item, cartItem]);

  useEffect(() => {
    const totalValue = quantityValue * priceOfProduct;
    setTotalResult(totalValue);
  }, [quantityValue, priceOfProduct, totalResult]);

  console.log(nameOfProduct)
  return (
    <Container>
      <img src={photoOfProduct} alt={`Foto do produto ${nameOfProduct}`} />
      <h4>{nameOfProduct}</h4>
      <Info>
        Size
        <select
          onChange={(e) => setSizeProduct(e.target.value)}
          value={sizeProduct}
        >
          {sizeOfProduct.map((size) => (
            <option key={size}>{size}</option>
          ))}
        </select>
        Quantity
        <select
          onChange={(e) => setQuantityValue(e.target.value)}
          value={quantityValue}
        >
          {quantityOfProduct.map((number) => (
            <option key={number.value} value={number.value}>
              {number}
            </option>
          ))}
        </select>
      </Info>

      <h2>${formatCurrency(totalResult)}</h2>

      <Btn
        onClick={() =>
          handleAddNewProduct(
            quantityValue,
            colorOfProduct,
            sizeProduct,
            idOfProduct,
            nameOfProduct,
            bigPhotoProduct,
            totalResult,
            
          )
        }
      >
        Add to cart
      </Btn>
    </Container>
  );
};

export default ListItemCard;

/*
<div>
      <Stack spacing={2} sx={{ width: "100%" }}>
<Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}>
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            O item foi adicionado ao carrinho!
          </Alert>
        </Snackbar>
      </Stack>
       </div>*/
/*const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });*/

/*item.color,
            item.id,
            item.description,
            item.maxresURL,*/
