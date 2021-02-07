import React from 'react';

import LoginCover from 'assets/loginCover.png';
import Logo from 'assets/logo.svg';

import { LoginForm } from '../../components/LoginForm';
import * as S from './styles';

export const Login = () => (
  <S.LoginWrapper>
    <S.LoginImage src={LoginCover} />
    <S.FormWrapper>
      <S.Logo src={Logo} />
      <LoginForm />
    </S.FormWrapper>
  </S.LoginWrapper>
);
