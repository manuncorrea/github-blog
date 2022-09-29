import styled from 'styled-components'

export const PostInfoContainer = styled.div`
  position: absolute;
  width: 54rem;
  height: 10.5rem;

  padding: 2rem 2.5rem;
  gap: 2rem;

  left: calc(50% -54rem / 2);
  top: 13rem;

  border-radius: 10px;

  background: ${(props) => props.theme['base-profile']};
  box-shadow: 0rem 0.125rem 1.75rem rgba(0, 0, 0, 0.2);

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.25rem;

    a {
      display: flex;
      align-items: center;

      text-decoration: none;
      text-transform: uppercase;

      gap: 0.5rem;
      font-size: 0.75rem;

      color: ${(props) => props.theme.blue};
      border-bottom: 1px solid transparent;

      &:hover {
        border-bottom: 1px solid ${(props) => props.theme.blue};
        transition: border-bottom 0.2s;
      }
    }
  }

  p {
    font-size: 1.25rem;
    font-weight: 700;
    color: ${(props) => props.theme['base-title']};
    line-height: 130%;
  }

  ul {
    display: flex;
    flex-direction: row;
    align-items: center;

    margin-top: 0.75rem;

    gap: 2rem;
    top: 6.875rem;

    li {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      list-style: none;
      font-size: 1rem;

      color: ${(props) => props.theme['base-span']};
    }
  }
`
