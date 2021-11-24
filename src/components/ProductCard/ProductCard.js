import React from "react";
import { MdKeyboardArrowDown } from 'react-icons/md'

import { Container, Info, Btn } from './styles'

const ProductCard = ({ description, price, photo }) => {
  return (
    <Container>
        <img src={photo} alt={`Foto do produto ${description}`} />
        <h4>{description}</h4>
        <Info>Size <span>41</span> <button><MdKeyboardArrowDown /></button> Quantity <span>1</span> <button><MdKeyboardArrowDown /></button></Info>
        <h2>$ {price}</h2>
        <Btn>Add to cart</Btn>
    </Container>
  );
};

export default ProductCard;
