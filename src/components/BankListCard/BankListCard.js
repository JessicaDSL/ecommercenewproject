import React from 'react'
import { IoIosArrowForward } from "react-icons/io";

import { Container } from './styles'

const BankListCard = ({name, image, url}) => {
  return (
    <Container>
      <img src={image} alt={`logo do banco ${name}`} />
      <div>
      <h4>{name}</h4>
      <a href={url}>{url}</a>
      </div>
      
    </Container>
  )
}

export default BankListCard
