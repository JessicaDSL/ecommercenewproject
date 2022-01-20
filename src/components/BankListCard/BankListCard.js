import React, { useContext } from "react";
import { ProductContext } from "../../context/ContextApi";

import { Button } from "./styles";

const BankListCard = ({ name, image, url }) => {
  const { getBankFlag } = useContext(ProductContext);

  return (
    <Button onClick={() => getBankFlag(name, image)}>
      <img src={image} alt={`bank logo ${name}`} />
      <div>
        <h4>{name}</h4>
        <a href={url}>{url}</a>
      </div>
    </Button>
  );
};

export default BankListCard;
