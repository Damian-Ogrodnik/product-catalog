import styled from 'styled-components';

import { colors } from 'config/styles';

interface PrimaryButtonProps {
  disabled?: boolean;
}

export const PrimaryButton = styled.button<PrimaryButtonProps>`
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  height: 2.5rem;
  background: ${({ disabled }) => (disabled ? colors.darkGray : colors.primaryLight)};
  border-radius: 0.25rem;
  border: none;
  color: ${colors.white};
  transition: 0.3s;
  margin: 0.5rem 0rem;

  :hover {
    background: ${({ disabled }) => !disabled && colors.primary};
  }
`;
