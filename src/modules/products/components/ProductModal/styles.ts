import styled from 'styled-components';
import { Modal as _Modal } from 'antd';

import { colors, fontSizes } from 'config/styles';
import { mediaQuery } from 'common/helpers';

export const Modal = styled(_Modal)`
  .ant-modal-content {
    border-radius: 0.5rem;
    margin: 1rem;
    overflow: hidden;

    ${mediaQuery.medium} {
      margin: 0;
    }
  }
  .ant-modal-body {
    padding: 0;
  }
`;

export const OverlayStyles = { backgroundColor: 'rgba(0, 0, 0, 0.85)' };

export const Image = styled.img`
  height: 50%;
  width: 100%;
`;

export const ProductName = styled.h3`
  font-size: ${fontSizes.medium};
  font-weight: 600;
  margin: 1.5rem 1rem 0.5rem;
`;

export const ProductDescription = styled.p`
  font-size: ${fontSizes.normal};
  color: ${colors.darkGray};
  margin: 0rem 1rem 3rem;
`;
