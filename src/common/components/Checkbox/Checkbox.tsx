import React, { useState } from 'react';

import Check from 'assets/Check.svg';

import * as S from './styles';

interface CheckboxProps {
  label: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({ label }) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <S.Label>
      <S.CheckboxContainer>
        <S.HiddenCheckbox checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
        <S.StyledCheckbox checked={isChecked}>
          <S.Icon src={Check} />
        </S.StyledCheckbox>
      </S.CheckboxContainer>
      <span>{label}</span>
    </S.Label>
  );
};
