import React, { useContext, useState } from "react";
import AppleIcon from "@material-ui/icons/Apple";
import { AiOutlineHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import Footer from "../Footer";
import CartHeader from "../CartHeader/CartHeader";
import { ProductContext } from "../../context/ContextApi";
import { formatCurrency } from "../../utils/utils";

import {
  Container,
  Content,
  AppleLogo,
  List,
  ListItem,
  Form,
  Button,
} from "./styles";

const ApplePayment = () => {
  const { cart, amount } = useContext(ProductContext);

  const [checked, setChecked] = useState(false);

  const navigate = useNavigate();

  return (
    <Container>
      <CartHeader />
      <AppleLogo>
        <h2>Apple Pay</h2> <AppleIcon />
      </AppleLogo>

      {cart.map((item) => {
        return (
          <List>
            <ListItem>
              <b>Subtotal:</b> ${formatCurrency(item.price)}
            </ListItem>
          </List>
        );
      })}

      <h4>Total: ${formatCurrency(amount)}</h4>

      <Content>
        <hr /> <AiOutlineHeart /> <hr />
      </Content>

      <h3>Payment options *</h3>
      <Form>
        <div>
          <input type="radio" name="option" onClick={() => setChecked(true)} />
          <label>
            1x of <b>R$ {formatCurrency(amount)}</b>
          </label>
        </div>
        <div>
          <input type="radio" name="option" onClick={() => setChecked(true)} />
          <label>
            2x of <b>R$ {formatCurrency(amount / 2)}</b>
          </label>
        </div>
        <div>
          <input type="radio" name="option" onClick={() => setChecked(true)} />
          <label>
            3x of <b>R$ {formatCurrency(amount / 3)}</b>
          </label>
        </div>

        <Button
          type="button"
          checked={!checked}
          onClick={() =>
            !checked
              ? toast.error("Selecione uma das opções de pagamento !", {
                  theme: "dark",
                })
              : navigate("/confirm")
          }
        >
          <AppleIcon />
          Pay
        </Button>
      </Form>
      <Footer />
    </Container>
  );
};

export default ApplePayment;
