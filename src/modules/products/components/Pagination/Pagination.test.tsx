import React from 'react';

import { render } from 'tests';
import { Pagination } from './Pagination';

const mockedMeta = {
  totalItems: 100,
  itemCount: 10,
  itemsPerPage: '10',
  totalPages: 10,
  currentPage: '1',
};

describe('Pagination', () => {
  it('Displays all informations', () => {
    const { getByText } = render(
      <Pagination productsMeta={mockedMeta} fetchSpecificPage={jest.fn()} />,
    );

    expect(getByText('First')).toBeInTheDocument();
    expect(getByText('Last')).toBeInTheDocument();
    expect(getByText('1')).toBeInTheDocument();
    expect(getByText('10')).toBeInTheDocument();
  });

  it('Checks if first button is disabled', () => {
    const { getByText } = render(
      <Pagination productsMeta={mockedMeta} fetchSpecificPage={jest.fn()} />,
    );

    expect(getByText(/First/i).closest('button')).toBeDisabled();
  });

  it('Checks if last button is disabled', () => {
    const { getByText } = render(
      <Pagination
        productsMeta={{ ...mockedMeta, currentPage: '10', totalPages: 10 }}
        fetchSpecificPage={jest.fn()}
      />,
    );

    expect(getByText(/Last/i).closest('button')).toBeDisabled();
  });
});
