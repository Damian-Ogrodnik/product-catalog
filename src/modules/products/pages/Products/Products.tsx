import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Header } from '../../components/Header';
import { Pagination } from '../../components/Pagination';
import { ProductsList } from '../../components/ProductsList';
import { fetchProductsAsync, getProducts, getSearchDetails, setSearchDetails } from '../../store';
import { FetchProductsPayload } from '../../types';
import * as S from './styles';

export const Products = () => {
  const searchDetails = useSelector(getSearchDetails);
  const products = useSelector(getProducts);
  const dispatch = useDispatch();

  const changeSearchDetails = (searchDetails: FetchProductsPayload) => {
    dispatch(setSearchDetails(searchDetails));
  };

  useEffect(() => {
    dispatch(fetchProductsAsync.request({ ...searchDetails, page: 1 }));
  }, [searchDetails.promo, searchDetails.active, searchDetails.search]);

  useEffect(() => {
    dispatch(fetchProductsAsync.request({ ...searchDetails, page: 1 }));
  }, [searchDetails.page]);

  return (
    <S.ProductsWrapper>
      <Header searchDetails={searchDetails} changeSearchDetails={changeSearchDetails} />
      <ProductsList products={products} />
      <Pagination />
    </S.ProductsWrapper>
  );
};
