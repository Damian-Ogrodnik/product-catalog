import React from 'react';

import * as CS from 'common/components/styled';
import { Input } from 'common/components/Input';

import * as S from './styles';

export const LoginForm: React.FC = () => (
  <S.Form>
    <h1>Login</h1>
    <Input label="Username" placeholder="Enter Username" type="text" />
    <Input label="Password" placeholder="Enter Password" type="password" />
    <CS.PrimaryButton type="submit">Log in </CS.PrimaryButton>
    <S.Link to="/#">Forgot password?</S.Link>
  </S.Form>
);
