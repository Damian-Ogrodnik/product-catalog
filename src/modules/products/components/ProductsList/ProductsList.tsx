import React from 'react';

import { Product as ProductModel } from 'modules/products/types';

import { Product } from '../Product';
import * as S from './styles';

interface ProductsListProps {
  products: ProductModel[];
}

export const ProductsList: React.FC<ProductsListProps> = ({ products }) => {
  return (
    <S.ProductWrapper>
      {products.map(product => (
        <Product product={product} />
      ))}
    </S.ProductWrapper>
  );
};
