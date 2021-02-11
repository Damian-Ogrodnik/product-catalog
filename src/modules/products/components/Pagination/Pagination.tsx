import React from 'react';

import * as S from './styles';
import { ProductsMeta } from '../../types';

interface PaginationProps {
  productsMeta: ProductsMeta;
  fetchSpecificPage(page: number): void;
}

export const Pagination: React.FC<PaginationProps> = ({
  fetchSpecificPage,
  productsMeta: { totalItems, currentPage, itemsPerPage, totalPages },
}) => {
  const currentPageNumber = parseInt(currentPage, 10);
  const isFirstPage = currentPageNumber === 1;
  const isLastPage = currentPageNumber === totalPages;

  const fetchWithScroll = (page: number) => {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    fetchSpecificPage(page);
  };

  return (
    <S.PaginationWrapper>
      <S.PaginationButton
        isDisabled={currentPageNumber === 1}
        onClick={() => !isFirstPage && fetchWithScroll(1)}
      >
        First
      </S.PaginationButton>
      <S.Pagination
        total={totalItems}
        onChange={fetchWithScroll}
        pageSize={parseInt(itemsPerPage)}
        showSizeChanger={false}
        current={currentPageNumber}
      />
      <S.PaginationButton
        isDisabled={currentPageNumber === totalPages}
        onClick={() => !isLastPage && fetchWithScroll(totalPages)}
      >
        Last
      </S.PaginationButton>
    </S.PaginationWrapper>
  );
};
