import React from 'react';
import { Link } from 'react-router-dom';

import Logo from 'assets/logo.svg';
import { AppRoute } from 'routing/AppRoute.enum';

import { SearchForm } from '../SearchForm';
import * as S from './styles';

export const Header: React.FC = () => (
  <S.Header>
    <S.Logo src={Logo} />
    <SearchForm />
    <Link to={AppRoute.login}>
      <S.LoginButton>Log in</S.LoginButton>
    </Link>
  </S.Header>
);
