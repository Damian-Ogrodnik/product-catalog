import styled from 'styled-components';

import { mediaQuery } from 'common/helpers';

export const ProductWrapper = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2rem;
  padding: 3rem 10rem;

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
