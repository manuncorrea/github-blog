import styled from 'styled-components'
import headerBackground from '../../assets/header.png'

export const HeaderContainer = styled.div`
  background: url(${headerBackground}) no-repeat center;
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 18.5rem;

  img {
    margin-bottom: 5rem;
  }
`
