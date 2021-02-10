import React, { useState } from 'react';

import FilledStar from 'assets/filled-star.svg';
import EmptyStar from 'assets/star.svg';

import { Product as ProductModel } from '../../types';
import { ProductModal } from '../ProductModal';
import * as S from './styles';

interface ProductListProps {
  product: ProductModel;
}

export const Product: React.FC<ProductListProps> = ({
  product,
  product: { name, description, image, rating, promo, active },
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const starsData = new Array(5).fill(false, 0, 5).fill(true, 0, rating);

  const toogleModal = () => {
    setIsModalOpen(prevState => !prevState);
  };

  return (
    <S.ProductWrapper>
      <S.Image isActive={active} src={image} alt={`${name} image`} />
      {promo && <S.PromoLabel>Promo</S.PromoLabel>}
      <S.ContentWrapper>
        <S.ProductName>{name}</S.ProductName>
        <S.ProductDescription>{description}</S.ProductDescription>
        <S.StarsWrapper>
          {starsData.map((isFilled, idx) =>
            isFilled ? (
              <S.Star key={idx} src={FilledStar} alt="Filled star" />
            ) : (
              <S.Star key={idx} src={EmptyStar} alt="Empty Star" />
            ),
          )}
        </S.StarsWrapper>
        <S.PrimaryButton onClick={() => active && toogleModal()} isDisabled={!active}>
          {active ? 'Show details' : 'Unavailable'}
        </S.PrimaryButton>
        <ProductModal product={product} toogleModal={toogleModal} isModalOpen={isModalOpen} />
      </S.ContentWrapper>
    </S.ProductWrapper>
  );
};
