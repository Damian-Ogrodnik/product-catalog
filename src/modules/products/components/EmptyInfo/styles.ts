import styled from 'styled-components';

import { colors, fontSizes } from 'config/styles';
import { mediaQuery } from 'common/helpers';

export const EmptyInfoWrapper = styled.div`
  width: 40%;
  height: 20rem;
  background-color: ${colors.white};
  margin: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;

  ${mediaQuery.medium} {
    width: 90%;
    height: 20rem;
  }
`;

export const EmptyInfoIcon = styled.img`
  margin-bottom: 0.75rem;
`;

export const EmptyInfoHeader = styled.h3`
  font-size: ${fontSizes.large};
  margin: 0;
`;

export const EmptyInfoText = styled.p`
  color: ${colors.darkGray};
`;
