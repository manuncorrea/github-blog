import styled from 'styled-components'

export const ProfileContainer = styled.div`
  width: 100%;
  max-width: 864px;
  margin: 0 auto;
  padding: 2.5rem 2rem;
  gap: 1.5rem;

  position: absolute;
  width: 864px;
  height: 422px;
  left: calc(50% - 864px / 2);
  top: 376px;

  p {
    color: ${(props) => props.theme['base-text']};
    line-height: 1.6;
    margin-bottom: 1rem;
  }

  a {
    text-align: left;
    color: ${(props) => props.theme.blue};
  }

  code {
    font-size: 0.75rem;
    line-height: 1.6;
    margin: 2.5rem 0;
    background: ${(props) => props.theme['base-post']};
    padding: 1rem;
    border-radius: 6px;
    display: block;
  }
`
