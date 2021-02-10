import styled from 'styled-components';

import { colors, fontSizes } from 'config/styles';
import { PrimaryButton as _PrimaryButton } from 'common/components/styled';
import { mediaQuery } from 'common/helpers';

export const ProductWrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 0.5rem;
  overflow: hidden;
  background-color: ${colors.white};
  height: 100%;
`;

interface ImageProps {
  isActive: boolean;
}

export const Image = styled.img<ImageProps>`
  height: 45%;
  width: 100%;
  opacity: ${({ isActive }) => (isActive ? 1 : 0.5)};

  ${mediaQuery.small} {
    height: 55%;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: 100%;
  height: 100%;
`;

export const ProductName = styled.h3`
  font-size: ${fontSizes.medium};
  font-weight: 600;
  margin: 0;
`;

export const StarsWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  padding: 0.25rem 0;
`;

export const Star = styled.img``;

export const ProductDescription = styled.p`
  font-size: ${fontSizes.normal};
  color: ${colors.darkGray};
  flex-grow: 1;
  margin: 0;
`;

export const PrimaryButton = styled(_PrimaryButton)`
  height: 2rem;
`;

export const PromoLabel = styled.span`
  position: absolute;
  top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4.5rem;
  height: 1.75rem;

  background-color: ${colors.secondary};
  color: ${colors.white};
`;
