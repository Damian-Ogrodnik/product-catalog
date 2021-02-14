import React from 'react';

import { render } from 'tests';
import { Product } from './Product';

const mockedProduct = {
  id: 1,
  name: 'Example Product 1',
  description: 'Lorem ipsum description',
  rating: 2,
  image: 'https://picsum.photos/640/480?random=1',
  promo: true,
  active: false,
};

describe('Product', () => {
  it('Displays proper texts', () => {
    const { getByText } = render(<Product product={mockedProduct} />);

    expect(getByText(mockedProduct.name)).toBeInTheDocument();
    expect(getByText(mockedProduct.description)).toBeInTheDocument();
  });

  it('Displays promo label', () => {
    const { getByText } = render(<Product product={{ ...mockedProduct }} />);

    expect(getByText('Promo')).toBeInTheDocument();
  });

  it('Displays proper number of filled and unfilled stars', () => {
    const { getAllByAltText } = render(<Product product={{ ...mockedProduct }} />);

    expect(getAllByAltText('Filled star').length).toBe(2);
    expect(getAllByAltText('Empty star').length).toBe(3);
  });

  it('Displays unavailable button when product is not active', () => {
    const { getByText } = render(<Product product={{ ...mockedProduct }} />);

    expect(getByText(/Unavailable/i).closest('button')).toBeDisabled();
  });
});
