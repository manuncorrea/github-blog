import { ReactNode } from 'react'
import { BordBoxContainer } from './styles'

interface BorderBoxProps {
  children: ReactNode
}

export function BordBox({ children }: BorderBoxProps) {
  return <BordBoxContainer>{children}</BordBoxContainer>
}
