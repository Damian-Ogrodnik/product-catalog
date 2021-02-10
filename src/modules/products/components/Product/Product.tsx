import React from 'react';

import FilledStar from 'assets/filled-star.svg';
import EmptyStar from 'assets/star.svg';

import { Product as ProductModel } from '../../types';
import * as S from './styles';

interface ProductListProps {
  product: ProductModel;
}

export const Product: React.FC<ProductListProps> = ({
  product: { name, description, image, rating, promo, active },
}) => {
  const starsData = new Array(5).fill(false, 0, 5).fill(true, 0, rating);

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
        <S.PrimaryButton isDisabled={!active}>
          {active ? 'Show details' : 'Unavailable'}
        </S.PrimaryButton>
      </S.ContentWrapper>
    </S.ProductWrapper>
  );
};
