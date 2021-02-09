import React from 'react';

import Check from 'assets/Check.svg';

import * as S from './styles';

interface CheckboxProps {
  label: string;
  handleChange(isChcecked: boolean): void;
  isChecked: boolean;
}

export const Checkbox: React.FC<CheckboxProps> = ({ label, isChecked, handleChange }) => (
  <S.Label>
    <S.CheckboxContainer>
      <S.HiddenCheckbox checked={isChecked} onChange={() => handleChange(!isChecked)} />
      <S.StyledCheckbox checked={isChecked}>
        <S.Icon src={Check} />
      </S.StyledCheckbox>
    </S.CheckboxContainer>
    <span>{label}</span>
  </S.Label>
);
