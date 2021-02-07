import { HttpService } from 'common/services/HttpService';

import { BASE_URL } from './variables';

const httpService = new HttpService(BASE_URL);

export const rootService = {
  httpService,
} as const;

export type RootService = typeof rootService;
