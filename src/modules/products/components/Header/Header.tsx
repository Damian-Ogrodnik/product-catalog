import React from 'react';

import Logo from 'assets/logo.svg';
import { AppRoute } from 'routing/AppRoute.enum';
import { FetchProductsPayload } from 'modules/products/types';

import { SearchForm } from '../SearchForm';
import * as S from './styles';

interface HeaderProps {
  searchDetails: FetchProductsPayload;
  changeSearchDetails(searchDetails: FetchProductsPayload): void;
}

export const Header: React.FC<HeaderProps> = props => (
  <S.Header>
    <S.Logo src={Logo} />
    <SearchForm {...props} />
    <S.Link to={AppRoute.login}>
      <S.LoginButton>Log in</S.LoginButton>
    </S.Link>
  </S.Header>
);
