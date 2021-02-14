import styled from 'styled-components';

import { Pagination as _Pagination } from 'antd';
import { colors, fontFamily, fontSizes } from 'config/styles';

export const PaginationWrapper = styled.div`
  width: 100%;
  grid-column: 1/-1;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  max-height: 5rem;
`;

interface ButtonProps {
  disabled: boolean;
}

export const PaginationButton = styled.button<ButtonProps>`
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  border: none;
  background: transparent;
  color: ${({ disabled }) => disabled && colors.darkGray};
  font-size: ${fontSizes.normal};
  padding-bottom: 0.25rem;
  height: 100%;

  :hover {
    color: ${({ disabled }) => !disabled && colors.primary};
  }
`;

export const Pagination = styled(_Pagination)`
  .ant-pagination-prev,
  .ant-pagination-next {
    display: none;
  }

  .ant-pagination-item {
    border: none;
    background: transparent;
    font-family: ${fontFamily.primary};
    min-width: 0;
  }

  .ant-pagination-item a {
    :hover {
      color: ${colors.primary};
    }
  }

  .ant-pagination-item-active a {
    color: ${colors.primary};
    padding: 0 0.5rem;

    :hover {
      color: ${colors.primary};
    }
  }
`;
