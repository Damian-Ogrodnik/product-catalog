import React from 'react';

import { Product as ProductModel, ProductsMeta } from '../../types';
import { Product } from '../Product';
import { Pagination } from '../Pagination';
import { EmptyInfo } from '../EmptyInfo';
import * as S from './styles';

interface ProductsListProps {
  products: ProductModel[];
  productsMeta?: ProductsMeta;
  fetchSpecificPage(page: number): void;
}

export const ProductsList: React.FC<ProductsListProps> = ({
  products,
  productsMeta,
  fetchSpecificPage,
}) => {
  const isPaginationNeeded = products.length !== productsMeta?.totalItems;

  return products.length ? (
    <S.ProductWrapper>
      {products.map(product => (
        <Product key={product.id} product={product} />
      ))}
      {isPaginationNeeded && productsMeta && (
        <Pagination productsMeta={productsMeta} fetchSpecificPage={fetchSpecificPage} />
      )}
    </S.ProductWrapper>
  ) : (
    <EmptyInfo>empty</EmptyInfo>
  );
};
