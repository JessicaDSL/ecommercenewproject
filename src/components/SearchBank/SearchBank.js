import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

import { Background, Input } from './styles'

const SearchBank = () => {
  return (
    <Background>
      <span><AiOutlineSearch /></span>
      <Input placeholder={`Search for your bank`} />
    </Background>
  )
}

export default SearchBank
