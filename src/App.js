import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./page/Home";
import Cart from "./page/Cart";
import SignToBankConfirm from "./components/SignToBankConfirm";
import ModalBankSelection from "./components/ModalBankSelection";
import GlobalStyle from "./styles/globalStyles";
import SignBankLogin from "./components/SignBankLogin/SignBankLogin";
import PaymentsInfo from "./components/PaymentsInfo";
import SelectBankFlag from "./components/SelectBankFlag";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart/" element={<Cart />} />
        <Route path="/selectbank" element={<SelectBankFlag />} />
        <Route path="/continue" element={<SignToBankConfirm />} />
        <Route path="/signin" element={<SignBankLogin />} />
        <Route path="/chooseaccount" element={<ModalBankSelection />} />
        <Route path="/confirm" element={<PaymentsInfo />} />
      </Routes>
    </Router>
  );
}

export default App;
