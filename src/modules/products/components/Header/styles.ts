import styled from 'styled-components';
import { Link as _Link } from 'react-router-dom';

import { colors } from 'config/styles';
import { SecondaryButton } from 'common/components/styled';
import { mediaQuery } from 'common/helpers';

export const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 0 10rem;
  height: 5rem;
  background-color: ${colors.white};

  ${mediaQuery.extraLarge} {
    padding: 0 1rem;
  }

  ${mediaQuery.medium} {
    position: relative;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    height: auto;
    padding: 2rem 1rem;
  }
`;

export const Logo = styled.img`
  margin-right: 5rem;
`;

export const Link = styled(_Link)`
  ${mediaQuery.medium} {
    position: absolute;
    top: 1rem;
    right: 1rem;
  }
`;

export const LoginButton = styled(SecondaryButton)`
  width: 5rem;
`;
