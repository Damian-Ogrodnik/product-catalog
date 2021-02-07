import { combineEpics } from 'redux-observable';

import { productsEpicFactory } from 'modules/products/store/epics';

import { productsService } from './rootService';

export const rootEpic = combineEpics(productsEpicFactory(productsService));
