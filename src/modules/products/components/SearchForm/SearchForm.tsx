import React from 'react';
import { Checkbox } from 'common/components/Checkbox';

import * as S from './styles';

export const SearchForm: React.FC = () => (
  <S.SearchForm>
    <S.SearchInput />
    <Checkbox label="Active" />
    <Checkbox label="Promo" />
  </S.SearchForm>
);
