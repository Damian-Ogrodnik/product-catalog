import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { Header } from '../components/Header';
import { fetchProductsAsync } from '../store';
import * as S from './styles';

export const Products = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      fetchProductsAsync.request({
        parse: 'en',
        limit: 5,
        pageNumber: 2,
        activeFilter: false,
        promoFilter: false,
      }),
    );
  }, []);
  return (
    <S.ProductsWrapper>
      <Header />
    </S.ProductsWrapper>
  );
};
