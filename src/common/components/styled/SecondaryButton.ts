import styled from 'styled-components';

import { colors } from 'config/styles';

interface PrimaryButtonProps {
  disabled?: boolean;
}

export const SecondaryButton = styled.button<PrimaryButtonProps>`
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  height: 2.5rem;
  color: ${({ disabled }) => (disabled ? colors.darkGray : colors.primaryLight)};
  border-radius: 0.25rem;
  border: 1px solid ${colors.primaryLight};
  background-color: ${colors.white};
  transition: 0.3s;
  margin: 0.5rem 0rem;

  :hover {
    color: ${({ disabled }) => !disabled && colors.primary};
    border-color: ${({ disabled }) => !disabled && colors.primary};
  }
`;
