import styled from 'styled-components';

import { colors } from 'config/styles';

interface PrimaryButtonProps {
  isDisabled?: boolean;
}

export const PrimaryButton = styled.button<PrimaryButtonProps>`
  cursor: ${({ isDisabled }) => (isDisabled ? 'not-allowed' : 'pointer')};
  height: 2.5rem;
  background: ${({ isDisabled }) => (isDisabled ? colors.darkGray : colors.primaryLight)};
  border-radius: 0.25rem;
  border: none;
  color: ${colors.white};
  transition: 0.3s;
  margin: 0.5rem 0rem;

  :hover {
    background: ${({ isDisabled }) => !isDisabled && colors.primary};
  }
`;
