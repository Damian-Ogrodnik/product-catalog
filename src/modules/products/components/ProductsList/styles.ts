import styled from 'styled-components';

import { mediaQuery } from 'common/helpers';

export const ProductWrapper = styled.main`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 2rem;
  padding: 2rem 10rem;

  ${mediaQuery.extraLarge} {
    padding: 2rem 1rem;
    grid-template-columns: 1fr 1fr 1fr;
  }

  ${mediaQuery.large} {
    grid-template-columns: 1fr 1fr;
  }

  ${mediaQuery.small} {
    grid-template-columns: 1fr;
  }
`;
