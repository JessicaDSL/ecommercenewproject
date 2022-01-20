import React, { useState, useContext, useEffect } from "react";
import AppleIcon from "@mui/icons-material/Apple";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import MasterCard from "../../assets/image/paymentform/mastercard.png";
import Visa from "../../assets/image/paymentform/visa.png";
import Chase from "../../assets/image/paymentform/chaaaaase.png";
import America from "../../assets/image/paymentform/america.png";
import Wf from "../../assets/image/paymentform/wf.png";
import Pnc from "../../assets/image/paymentform/pnc.png";
import Citi from "../../assets/image/paymentform/citi.png";

import {
  Form,
  List,
  ListItem,
  PaymentOnline,
  ImageFlags,
  Btn,
  CardPayment,
  ApplePayment,
} from "./styles";
import { ProductContext } from "../../context/ContextApi";

const SelectPaymentMethod = () => {
  let navigate = useNavigate();

  const [selectedPaymenth, setSelectedPaymenth] = useState(false);

  const { getUrl } = useContext(ProductContext);

  useEffect(() => {
    getUrl(selectedPaymenth);
  }, [selectedPaymenth, getUrl]);

  return (
    <Form>
      <List>
        <ListItem>
          <button
            type="button"
            onClick={() => setSelectedPaymenth("/selectbank")}
          >
            <PaymentOnline>
              <p>Online Banking</p> <strong>SAVE $10</strong>
            </PaymentOnline>
            <ImageFlags>
              <img src={Chase} alt="Chase's logo" />
              <img src={America} alt="America's logo" />
              <img src={Wf} alt="Wf's logo" />
              <img src={Pnc} alt="Pnc's logo" />
              <img src={Citi} alt="Citi's logo" />
              <span>& more</span>
            </ImageFlags>
          </button>
        </ListItem>
        <ListItem>
          <button
            type="button"
            onClick={() => setSelectedPaymenth("/cardpayment")}
          >
            <CardPayment>
              <div>
                <p>Card Payment</p>
              </div>
              <div>
                <img src={MasterCard} alt="MasterCard's logo" />
                <img src={Visa} alt="Visa's logo" />
              </div>
            </CardPayment>
          </button>
        </ListItem>
        <ListItem>
          <ApplePayment>
            <button
              type="button"
              onClick={() => setSelectedPaymenth("/applepayment")}
            >
              <div>Apple Pay</div>{" "}
              <div>
                <AppleIcon /> <span>Pay</span>
              </div>
            </button>
          </ApplePayment>
        </ListItem>
      </List>
      <Btn
        type="button"
        selectedPaymenth={!selectedPaymenth}
        onClick={() =>
          !selectedPaymenth
            ? toast.error("Select one of the payment options!", {
                theme: "dark",
              })
            : navigate(selectedPaymenth)
        }
      >
        Continue
      </Btn>
    </Form>
  );
};

export default SelectPaymentMethod;
