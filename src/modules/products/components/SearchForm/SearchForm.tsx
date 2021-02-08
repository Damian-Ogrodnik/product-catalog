import React from 'react';
import { Checkbox } from 'common/components/Checkbox';

import * as S from './styles';

export const SearchForm: React.FC = () => (
  <S.SearchForm>
    <S.SearchInput placeholder="Search" />
    <S.CheckboxWrapper>
      <Checkbox label="Active" />
      <Checkbox label="Promo" />
    </S.CheckboxWrapper>
  </S.SearchForm>
);
