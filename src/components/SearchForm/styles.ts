import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  width: 100%;
  max-width: 864px;
  margin: 0 auto;
  margin-top: 12rem;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.75rem;

    strong {
      font-size: 1.125rem;
      font-weight: 700;
      color: ${(props) => props.theme['base-subtitle']};
    }

    span {
      font-size: 0.875rem;
      font-weight: 400;
      color: ${(props) => props.theme['base-span']};
    }
  }
  input {
    display: flex;
    flex-direction: row;
    align-items: center;

    padding: 0.75rem 1rem;

    background: ${(props) => props.theme['base-input']};
    color: ${(props) => props.theme['base-text']};

    width: 54rem;
    height: 3.125rem;

    border: 1px solid ${(props) => props.theme['base-border']};
    border-radius: 6px;

    &::placeholder {
      font-size: 1rem;
      color: ${(props) => props.theme['base-label']};
    }
  }
`
