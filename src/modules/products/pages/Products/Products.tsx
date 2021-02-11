import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

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

  const fetchSpecificPage = (page: number) => {
    dispatch(fetchProductsAsync.request({ ...searchDetails, page }));
  };

  useEffect(() => {
    fetchSpecificPage(1);
  }, [searchDetails.promo, searchDetails.active, searchDetails.search]);

  return (
    <S.ProductsWrapper>
      <Header searchDetails={searchDetails} changeSearchDetails={changeSearchDetails} />
      {isFetchingProducts ? (
        <div>Loading</div>
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
