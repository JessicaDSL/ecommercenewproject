import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { Container } from "./styles";

const Footer = () => {
  return (
    <Container>
      Done with{" "}
      <span>
        <FavoriteIcon />
      </span>{" "}
      by <a href="https://jessicadsl.github.io/portfolio/">Jéssica Lima</a>
    </Container>
  );
};

export default Footer;
