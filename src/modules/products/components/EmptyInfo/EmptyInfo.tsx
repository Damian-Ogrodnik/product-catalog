import React from 'react';

import EmptyIcon from 'assets/empty-icon.svg';

import * as S from './styles';

export const EmptyInfo: React.FC = () => (
  <S.EmptyInfoWrapper>
    <S.EmptyInfoIcon src={EmptyIcon} alt="Empty icon" />
    <S.EmptyInfoHeader>Ooops… It’s empty here</S.EmptyInfoHeader>
    <S.EmptyInfoText>There are no products on the list</S.EmptyInfoText>
  </S.EmptyInfoWrapper>
);
