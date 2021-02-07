import styled from 'styled-components';

import { colors } from 'config/styles';

export const Input = styled.input`
  background: ${colors.white};
  border: 1px solid ${colors.lighestGray};
  box-sizing: border-box;
  border-radius: 0.75rem;
  color: ${colors.darkGray};
  padding: 0.75rem;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-weight: 600;
  margin: 0.5rem 0;
`;
