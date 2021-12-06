import React from 'react';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import CheckoutPayment from './components/CheckoutPayment/CheckoutPayment';
import { ProductProvider } from './context/ContextApi';
import Home from './page/Home';
import GlobalStyle from './styles/globalStyles';

function App() {
  return (
    <ProductProvider>
      <Router>
      <GlobalStyle />
      <Routes>
        <Route  path="/" element={<Home />}/>
        <Route  path="productcart" element={<CheckoutPayment />}/>
      </Routes>
    </Router>
    </ProductProvider>
  );
}

export default App;
