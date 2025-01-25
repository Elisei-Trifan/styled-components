import React from 'react'
import styled from 'styled-components'

const StyledTitle = styled.h1`
  font-size: ${(props) => props.fontSize}; //Свойство достали из пропса
  color: ${({ color }) => color}; // Деструктуризацией сразу вытащено свойство
`

const Title = (props) => {
  return <StyledTitle {...props} />
}

export default Title
