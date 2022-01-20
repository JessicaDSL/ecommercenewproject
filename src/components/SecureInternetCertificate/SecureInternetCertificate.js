import React from "react";
import LockIcon from "@material-ui/icons/Lock";

import { Container } from "./styles";

const SecureInternetCertificate = () => {
  return (
    <Container>
      <LockIcon />
      <h6>Secure Connection by</h6>
      <a href="https://jessicadsl.github.io/portfolio/">GoJessy s2*</a>
    </Container>
  );
};

export default SecureInternetCertificate;
