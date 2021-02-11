import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Spinner from 'assets/spinner.svg';
import * as CS from 'common/components/styled';

import { Header } from '../../components/Header';
import { ProductsList } from '../../components/ProductsList';
import {
  fetchProductsAsync,
  getProducts,
  getSearchDetails,
  setSearchDetails,
  getProductsMeta,
  getIsFetchingProducts,
} from '../../store';
import { FetchProductsPayload } from '../../types';
import * as S from './styles';

export const Products = () => {
  const searchDetails = useSelector(getSearchDetails);
  const products = useSelector(getProducts);
  const productsMeta = useSelector(getProductsMeta);
  const isFetchingProducts = useSelector(getIsFetchingProducts);
  const dispatch = useDispatch();

  const changeSearchDetails = (searchDetails: FetchProductsPayload) => {
    dispatch(setSearchDetails(searchDetails));
  };

  const fetchSpecificPage = useCallback(
    (page: number) => {
      dispatch(fetchProductsAsync.request({ ...searchDetails, page }));
    },
    [dispatch, searchDetails],
  );

  useEffect(() => {
    fetchSpecificPage(1);
  }, [fetchSpecificPage]);

  return (
    <S.ProductsWrapper>
      <Header searchDetails={searchDetails} changeSearchDetails={changeSearchDetails} />
      {isFetchingProducts ? (
        <CS.Spinner src={Spinner} alt="Loader" />
      ) : (
        <ProductsList
          products={products}
          productsMeta={productsMeta}
          fetchSpecificPage={fetchSpecificPage}
        />
      )}
    </S.ProductsWrapper>
  );
};
