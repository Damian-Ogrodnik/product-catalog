import * as t from 'io-ts';

export const ProductsLinks = t.type({
  first: t.string,
  last: t.string,
  next: t.string,
  previous: t.string,
});

export interface ProductsLinks extends t.TypeOf<typeof ProductsLinks> {}

export const ProductsMeta = t.type({
  currentPage: t.string,
  itemCount: t.number,
  itemsPerPage: t.string,
  totalItems: t.number,
  totalPages: t.number,
});

export interface ProductsMeta extends t.TypeOf<typeof ProductsMeta> {}

export const Product = t.type({
  id: t.number,
  name: t.string,
  description: t.string,
  rating: t.number,
  image: t.string,
  promo: t.boolean,
  active: t.boolean,
});

export interface Product extends t.TypeOf<typeof Product> {}

export const ProductsData = t.type({
  items: t.array(Product),
  links: ProductsLinks,
  meta: ProductsMeta,
});

export interface ProductsData extends t.TypeOf<typeof ProductsData> {}
