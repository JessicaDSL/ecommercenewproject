import React from 'react'
import Search from '../Search'

import Photo from '../../assets/image/Jessy.jpg'
import { Container, ImageLogin } from './styles'

const Header = () => {
  return (
    <Container>
      <ImageLogin>
        <img src={Photo} alt="Foto Perfil" />
      </ImageLogin>
      <Search />
      <hr />
    </Container>
  )
}

export default Header
