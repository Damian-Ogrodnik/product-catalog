import styled from 'styled-components';

import { colors } from 'config/styles';

interface PrimaryButtonProps {
  isDisabled?: boolean;
}

export const SecondaryButton = styled.button<PrimaryButtonProps>`
  cursor: ${({ isDisabled }) => (isDisabled ? 'not-allowed' : 'pointer')};
  height: 2.5rem;
  color: ${({ isDisabled }) => (isDisabled ? colors.darkGray : colors.primaryLight)};
  border-radius: 0.25rem;
  border: 1px solid ${colors.primaryLight};
  background-color: ${colors.white};
  transition: 0.3s;
  margin: 0.5rem 0rem;

  :hover {
    color: ${({ isDisabled }) => !isDisabled && colors.primary};
    border-color: ${({ isDisabled }) => !isDisabled && colors.primary};
  }
`;
