import { css } from "styled-components";

const grid = css`
  max-width: 1024px;
  display: grid;
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
  width: calc(100% - 2rem);
  margin-left: ${({ theme }) => theme.margins.mb2};
  margin-right: ${({ theme }) => theme.margins.mb2};

  @media (min-width: 1024px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

const section = css`
  padding: 2rem 0;
`;

export default {
  grid,
  section,
};
