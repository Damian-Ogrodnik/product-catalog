import styled from 'styled-components';

import { mediaQuery } from 'common/helpers';

export const ProductWrapper = styled.main`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 1.5rem;
  padding: 2rem 10rem;

  ${mediaQuery.extraLarge} {
    padding: 0 1rem;
  }

  ${mediaQuery.medium} {
    padding: 2rem 1rem;
  }
`;
