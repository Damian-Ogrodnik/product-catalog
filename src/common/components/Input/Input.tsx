import React from 'react';

import * as S from './styles';

interface InputProps {
  label?: string;
  placeholder?: string;
  type: string;
}

export const Input: React.FC<InputProps> = ({ label, placeholder, type }) => (
  <S.Label>
    {label}
    <S.Input placeholder={placeholder} type={type} />
  </S.Label>
);
