import styled from 'styled-components';

import { colors } from 'config/styles';
import { SecondaryButton } from 'common/components/styled';

export const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 0 10rem;
  height: 5rem;
  background-color: ${colors.white};
`;

export const Logo = styled.img`
  margin-right: 5rem;
`;

export const LoginButton = styled(SecondaryButton)`
  width: 5rem;
`;
