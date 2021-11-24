/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react'
import { GrSecure } from "react-icons/gr";

import { Container } from './styles'

const SecureInternetCertificate = () => {
  return (
    <Container>
        <GrSecure />
        <h6>Secure Connection by</h6> 
        <a href="#">GoJessy s2*</a>
      </Container>
  )
}

export default SecureInternetCertificate
