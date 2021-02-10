import React from 'react';

import * as S from './styles';
import { Product } from 'modules/products/types';

interface ProductModalProps {
  isModalOpen: boolean;
  toogleModal(): void;
  product: Product;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  isModalOpen,
  toogleModal,
  product: { name, description, image },
}) => (
  <S.Modal visible={isModalOpen} onCancel={toogleModal} footer={false} maskStyle={S.OverlayStyles}>
    <S.Image src={image} alt={`${name} image`} />
    <S.ProductName>{name}</S.ProductName>
    <S.ProductDescription>{description}</S.ProductDescription>
  </S.Modal>
);
