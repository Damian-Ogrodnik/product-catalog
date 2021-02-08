import styled from 'styled-components';

import { colors } from 'config/styles';

export const SearchForm = styled.form`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-grow: 1;
`;

export const SearchInput = styled.input`
  background: ${colors.white};
  border: 1px solid ${colors.lighestGray};
  box-sizing: border-box;
  border-radius: 0.75rem;
  color: ${colors.darkGray};
  padding: 0.75rem;
  min-width: 25rem;
`;
