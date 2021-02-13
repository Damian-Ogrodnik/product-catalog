import { right } from 'fp-ts/es6/Either';
import { mapLeft } from 'fp-ts/lib/Either';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

import { productsDataMock } from '../mocks';
import { parseProducts } from './parseProducts';

describe('parseProducts util', () => {
  it('should return validated products', () => {
    of(parseProducts(productsDataMock)).subscribe(val => expect(right(val)).toBe(undefined));
  });
});
