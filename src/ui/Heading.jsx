import styled, { css } from 'styled-components'

const Heading = styled.header`
  ${(props) =>
    props.as === 'h1' &&
    css`
      font-size: 30px;
      font-weight: 600;
    `}

  ${(props) =>
    props.as === 'h2' &&
    css`
      font-size: 20px;
      font-weight: 600;
    `}

  ${(props) =>
    props.as === 'h3' &&
    css`
      font-size: 14px;
      font-weight: 600;
    `}

  color: var(--color-brand-500);
`

export default Heading
