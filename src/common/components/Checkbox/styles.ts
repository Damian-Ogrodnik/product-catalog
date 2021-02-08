import styled from 'styled-components';

import { colors } from 'config/styles';

export const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const Icon = styled.img`
  width: 70%;
  height: 70%;
`;

interface StyledCheckboxProps {
  checked: boolean;
}

export const StyledCheckbox = styled.div<StyledCheckboxProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.5rem;
  height: 1.5rem;
  background: ${({ checked }) => (checked ? colors.primary : colors.white)};
  border: ${({ checked }) => (checked ? 'none' : `1px solid ${colors.lighestGray}`)};
  border-radius: 3px;
  transition: all 150ms;

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 1px ${colors.primaryLight};
  }

  ${Icon} {
    visibility: ${({ checked }) => (checked ? 'visible' : 'hidden')};
  }
`;

export const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;
