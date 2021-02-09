import * as t from 'io-ts';

export const FetchProductsPayload = t.type({
  search: t.string,
  limit: t.number,
  page: t.number,
  promo: t.boolean,
  active: t.boolean,
});

export interface FetchProductsPayload extends t.TypeOf<typeof FetchProductsPayload> {}
