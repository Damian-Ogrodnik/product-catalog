import * as t from 'io-ts';

export const FetchProductsPayload = t.type({
  parse: t.string,
  limit: t.number,
  pageNumber: t.number,
  activeFilter: t.boolean,
  promoFilter: t.boolean,
});

export interface FetchProductsPayload extends t.TypeOf<typeof FetchProductsPayload> {}
