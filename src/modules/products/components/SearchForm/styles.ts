import styled from 'styled-components';

import { colors } from 'config/styles';
import { mediaQuery } from 'common/helpers';

export const SearchForm = styled.form`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-grow: 1;
  gap: 1rem;

  ${mediaQuery.medium} {
    flex-direction: column;
    align-items: flex-start;
    height: auto;
    padding: 2rem 0.25rem;
    width: 100%;
  }
`;

export const SearchInput = styled.input`
  background: ${colors.white};
  border: 1px solid ${colors.lighestGray};
  box-sizing: border-box;
  border-radius: 0.75rem;
  color: ${colors.darkGray};
  padding: 0.75rem;
  min-width: 25rem;

  ${mediaQuery.large} {
    min-width: auto;
  }

  ${mediaQuery.medium} {
    min-width: 100%;
  }
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;
