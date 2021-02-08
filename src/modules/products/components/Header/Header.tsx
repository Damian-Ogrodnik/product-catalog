import React from 'react';

import Logo from 'assets/logo.svg';
import { AppRoute } from 'routing/AppRoute.enum';

import { SearchForm } from '../SearchForm';
import * as S from './styles';

export const Header: React.FC = () => (
  <S.Header>
    <S.Logo src={Logo} />
    <SearchForm />
    <S.Link to={AppRoute.login}>
      <S.LoginButton>Log in</S.LoginButton>
    </S.Link>
  </S.Header>
);
