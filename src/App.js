import React from "react";
import "react-toastify/dist/ReactToastify.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Home from "./page/Home";
import Cart from "./page/Cart";
import SignToBankConfirm from "./components/SignToBankConfirm";
import ModalBankSelection from "./components/ModalBankSelection";
import GlobalStyle from "./styles/globalStyles";
import SignBankLogin from "./components/SignBankLogin/SignBankLogin";
import PaymentConfirm from "./components/PaymentConfirm";
import SelectBankFlag from "./components/SelectBankFlag";
import CardPayment from "./components/CardPayment/CardPayment";
import ApplePayment from "./components/ApplePayment";
import ProductItem from "./components/ProductItem";
import CompletedPurchase from "./components/CompletedPurchase/CompletedPurchase";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ToastContainer autoClose={3000} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart/:paymentform" element={<Cart />} />
        <Route path="/cartitem" element={<ProductItem />} />
        <Route path="/selectbank" element={<SelectBankFlag />} />
        <Route path="/continue" element={<SignToBankConfirm />} />
        <Route path="/signin" element={<SignBankLogin />} />
        <Route path="/chooseaccount" element={<ModalBankSelection />} />
        <Route path="/cardpayment" element={<CardPayment />} />
        <Route path="/applepayment" element={<ApplePayment />} />
        <Route path="/confirm" element={<PaymentConfirm />} />
        <Route path="/completedpurchase" element={<CompletedPurchase />} />
      </Routes>
    </Router>
  );
}

export default App;
