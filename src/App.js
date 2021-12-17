import React from 'react';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import CheckoutPayment from './components/CheckoutPayment/CheckoutPayment';
import SignToBankConfirm from './components/SignToBankConfirm/SignToBankConfirm';
import SelectBank from './components/SelectBank';
import ChooseAccount from './components/ChooseAccount'
import { ProductProvider } from './context/ContextApi';
import Home from './page/Home';
import GlobalStyle from './styles/globalStyles';
import SignBankLogin from './components/SignBankLogin/SignBankLogin';
import PaymentConfirmation from './components/PaymentConfirmation/PaymentConfirmation';

function App() {
  return (
    <ProductProvider>
      <Router>
      <GlobalStyle />
      <Routes>
        <Route  path="/" element={<Home />}/>
        <Route  path="productcart" element={<CheckoutPayment />}/>
        <Route  path="/selectbank" element={<SelectBank />}/>
        <Route  path="/continue" element={<SignToBankConfirm />}/>
        <Route  path="/signin" element={<SignBankLogin />}/>
        <Route  path="/chooseaccount" element={<ChooseAccount />}/>
        <Route  path="/confirm" element={<PaymentConfirmation />}/>
      </Routes>
    </Router>
    </ProductProvider>
  );
}

export default App;
