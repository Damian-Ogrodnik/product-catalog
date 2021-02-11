import styled from 'styled-components';
import { Link as _Link } from 'react-router-dom';

import { colors } from 'config/styles';
import { SecondaryButton } from 'common/components/styled';
import { mediaQuery } from 'common/helpers';

export const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 2rem 10rem;
  height: 5rem;
  width: 100%;
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
    padding: 2rem 1rem 0rem;
    height: auto;
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
