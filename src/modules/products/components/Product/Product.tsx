import React from 'react';

import { Product as ProductModel } from 'modules/products/types';
import * as S from './styles';

interface ProductListProps {
  product: ProductModel;
}

export const Product: React.FC<ProductListProps> = ({ product }) => {
  return <S.ProductWrapper>{product.name}</S.ProductWrapper>;
};
