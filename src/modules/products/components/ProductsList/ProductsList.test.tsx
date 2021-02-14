import { productsDataMock } from 'modules/products/mocks';
import React from 'react';

import { render } from 'tests';
import { ProductsList } from './ProductsList';

describe('Pagination', () => {
  it('Displays information when there is no products', () => {
    const { getByText } = render(
      <ProductsList
        products={[]}
        productsMeta={productsDataMock.meta}
        fetchSpecificPage={jest.fn()}
      />,
    );

    expect(getByText('Ooops… It’s empty here')).toBeInTheDocument();
    expect(getByText('There are no products on the list')).toBeInTheDocument();
  });

  it('Does not display pagination when there is no pages', () => {
    const { queryByText } = render(
      <ProductsList
        products={productsDataMock.items}
        productsMeta={productsDataMock.meta}
        fetchSpecificPage={jest.fn()}
      />,
    );

    expect(queryByText('First')).not.toBeInTheDocument();
    expect(queryByText('Last')).not.toBeInTheDocument();
  });

  it('Displays correct number of product items', async () => {
    const { container } = render(
      <ProductsList
        products={productsDataMock.items}
        productsMeta={productsDataMock.meta}
        fetchSpecificPage={jest.fn()}
      />,
    );

    expect(container.children[0].children.length).toBe(productsDataMock.items.length);
  });
});
