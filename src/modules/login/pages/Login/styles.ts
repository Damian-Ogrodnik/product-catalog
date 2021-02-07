import styled from 'styled-components';

import { mediaQuery } from 'common/helpers';

export const LoginWrapper = styled.div`
  height: 100vh;
  position: relative;
  display: flex;
`;

export const LoginImage = styled.img`
  height: 100%;
  min-width: 30%;
  width: auto;

  ${mediaQuery.medium} {
    display: none;
  }
`;

export const FormWrapper = styled.div`
  width: 100%;
  margin: 7rem;
  display: flex;
  align-items: center;

  ${mediaQuery.medium} {
    margin: 1.5rem;
  }
`;

export const Logo = styled.img`
  top: 2rem;
  position: absolute;
`;
