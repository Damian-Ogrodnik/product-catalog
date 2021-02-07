import styled from 'styled-components';
import { Link as _Link } from 'react-router-dom';

import { colors } from 'config/styles/';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 70%;
`;

export const Link = styled(_Link)`
  color: ${colors.darkGray};
  text-decoration: underline;
  transition: 0.3s;

  :hover {
    color: ${colors.black};
  }
`;
