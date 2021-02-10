import React from 'react';

import { Product as ProductModel, ProductsMeta } from 'modules/products/types';

import { Product } from '../Product';
import * as S from './styles';
import { Pagination } from '../Pagination';

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

  return (
    <S.ProductWrapper>
      {products.map(product => (
        <Product key={product.id} product={product} />
      ))}
      {isPaginationNeeded && productsMeta && (
        <Pagination productsMeta={productsMeta} fetchSpecificPage={fetchSpecificPage} />
      )}
    </S.ProductWrapper>
  );
};
