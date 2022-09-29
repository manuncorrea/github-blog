import styled from 'styled-components'

export const ProfolieContainer = styled.div`
  display: flex;
  position: absolute;
  width: 54rem;
  height: 13.25rem;

  padding: 2rem 2.5rem;
  gap: 2rem;

  left: calc(50% - 54rem / 2);
  top: 13rem;

  background: ${(props) => props.theme['base-profile']};
  opacity: 0.64;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  border-radius: 10px;

  img {
    width: 9.25rem;
    height: 9.25rem;
    object-fit: cover;
    border-radius: 8px;
  }

  > div {
    flex: 1;
    display: flex;
    flex-direction: column;

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 0.5rem;

      h2 {
        color: ${(porps) => porps.theme['base-title']};
        font-weight: 700;
        font-size: 1.5rem;
        line-height: 160%;
      }

      a {
        display: flex;
        align-items: center;

        color: ${(props) => props.theme.blue};
        font-size: 1rem;
        font-weight: bold;
        text-decoration: none;

        border-bottom: 1px solid transparent;

        gap: 0.5rem;

        &:hover {
          border-bottom: 1px solid ${(props) => props.theme.blue};
          transition: border-bottom 0.2s;
        }
      }
    }

    ul {
      display: flex;
      flex-direction: row;
      align-items: center;

      gap: 1.5rem;

      position: absolute;
      width: 24.563rem;
      height: 1.625rem;
      left: 13.75rem;
      top: calc(50% - 1.625rem / 2 + 3.875rem);

      li {
        display: flex;
        align-items: center;
        color: ${(props) => props.theme['base-subtitle']};
      }

      svg {
        margin-right: 0.5rem;
        color: ${(props) => props.theme['base-subtitle']};
      }
    }
  }
`
