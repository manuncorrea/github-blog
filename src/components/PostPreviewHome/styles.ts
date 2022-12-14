import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const PostHomeContainer = styled(Link)`
  width: 100%;
  max-width: 26rem;
  height: 16.25rem;
  overflow: hidden;
  border: 0;
  border: 2px solid transparent;

  cursor: pointer;

  text-align: left;

  padding: 2rem;
  text-decoration: none;

  background: ${(props) => props.theme['base-post']};
  border-radius: 10px;

  &:hover {
    border: 2px solid ${(props) => props.theme['base-label']};
    transition: border 0.2s;
  }

  header {
    display: grid;
    grid-template-columns: 283px 1fr;
    margin-bottom: 1.25rem;

    h3 {
      font-size: 1.25rem;
      font-weight: 700;
      color: ${(props) => props.theme['base-title']};
      line-height: 160%;
    }

    span {
      font-size: 0.875rem;
      color: ${(props) => props.theme['base-span']};
    }
  }

  p {
    max-height: 7rem;
    color: ${(props) => props.theme['base-text']};
    overflow: hidden;
  }
`
