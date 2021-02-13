import { BASE_URL } from 'config/variables';

import { HttpService } from './HttpService';

describe('HttpService', () => {
  describe('objectToQueryString method', () => {
    it('returns proper string', () => {
      const queryData = {
        query: 'test',
        something: 'more',
        even: 'more',
      };

      const result = HttpService.objectToQueryString(queryData);

      expect(result).toBe('query=test&something=more&even=more');
    });

    it('returns proper query with one element', () => {
      const queryData = {
        query: 'test',
      };

      const result = HttpService.objectToQueryString(queryData);

      expect(result).toBe('query=test');
    });

    it('returns empty string if object is empty', () => {
      const queryData = {};

      const result = HttpService.objectToQueryString(queryData);

      expect(result).toBe('');
    });
  });
});
