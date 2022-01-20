import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

import { Container } from "./styles";
import { ProductContext } from "../../context/ContextApi";

const CompletedPurchase = () => {
  const { clearCart } = useContext(ProductContext);

  return (
    <Container>
      <div>
        <CheckCircleIcon />
      </div>
      <div>
        <p>Congratulations the purchase has been completed s2 !</p>{" "}
        <Link to="/">
          <button onClick={clearCart}>Back to start</button>
        </Link>
      </div>
    </Container>
  );
};

export default CompletedPurchase;
//<Link to="/">
