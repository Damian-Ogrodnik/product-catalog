import React from 'react';

import { Checkbox } from 'common/components/Checkbox';
import { FetchProductsPayload } from 'modules/products/types';

import * as S from './styles';

interface SearchFormProps {
  searchDetails: FetchProductsPayload;
  changeSearchDetails(searchDetails: FetchProductsPayload): void;
}

export const SearchForm: React.FC<SearchFormProps> = ({ searchDetails, changeSearchDetails }) => (
  <S.SearchForm>
    <S.SearchInput
      placeholder="Search"
      value={searchDetails.search}
      onChange={e => changeSearchDetails({ ...searchDetails, search: e.target.value })}
    />
    <S.CheckboxWrapper>
      <Checkbox
        label="Active"
        handleChange={(active: boolean) => changeSearchDetails({ ...searchDetails, active })}
        isChecked={searchDetails.active}
      />
      <Checkbox
        label="Promo"
        handleChange={(promo: boolean) => changeSearchDetails({ ...searchDetails, promo })}
        isChecked={searchDetails.promo}
      />
    </S.CheckboxWrapper>
  </S.SearchForm>
);
