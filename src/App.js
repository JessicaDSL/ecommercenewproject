import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./page/Home";
import Cart from "./page/Cart/Cart";
import SelectBank from "./components/SelectBank";
import SignToBankConfirm from "./components/SignToBankConfirm";
import ChooseAccount from "./components/ChooseAccount";
import GlobalStyle from "./styles/globalStyles";
import SignBankLogin from "./components/SignBankLogin/SignBankLogin";
import PaymentConfirmation from "./components/PaymentConfirmation";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart/" element={<Cart />} />
        <Route path="/selectbank" element={<SelectBank />} />
        <Route path="/continue" element={<SignToBankConfirm />} />
        <Route path="/signin" element={<SignBankLogin />} />
        <Route path="/chooseaccount" element={<ChooseAccount />} />
        <Route path="/confirm" element={<PaymentConfirmation />} />
      </Routes>
    </Router>
  );
}

export default App;
