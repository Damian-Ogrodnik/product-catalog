import { FetchProductsPayload, ProductsData } from '../types';

export const productsDataMock: ProductsData = {
  items: [
    {
      id: 1,
      name: 'Example Product 1',
      description: 'Lorem ipsum description',
      rating: 1,
      image: 'https://picsum.photos/640/480?random=1',
      promo: false,
      active: false,
    },
    {
      id: 2,
      name: 'Example Product 2',
      description: 'Lorem ipsum description 2',
      rating: 2,
      image: 'https://picsum.photos/640/480?random=2',
      promo: false,
      active: false,
    },
    {
      id: 3,
      name: 'Example Product 3',
      description: 'Lorem ipsum description 3',
      rating: 3,
      image: 'https://picsum.photos/640/480?random=3',
      promo: false,
      active: false,
    },
  ],
  meta: {
    totalItems: 3,
    itemCount: 3,
    itemsPerPage: '3',
    totalPages: 1,
    currentPage: '1',
  },
  links: {
    first: 'https://join-tsh-api-staging.herokuapp.com/product?limit=1',
    previous: '',
    next: 'https://join-tsh-api-staging.herokuapp.com/product?page=1&limit=3',
    last: 'https://join-tsh-api-staging.herokuapp.com/product?page=1&limit=3',
  },
};

export const requestPayloadData: FetchProductsPayload = {
  search: 'Example',
  limit: 3,
  page: 1,
  promo: false,
  active: false,
};
