import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import { createEpicMiddleware } from 'redux-observable';
import { Epic as _Epic } from 'redux-observable';

import { AppAction } from './rootAction';
import { rootEpic } from './rootEpic';

import { productsReducer } from 'modules/products/store';

export type AppState = ReturnType<typeof rootReducer>;
export type Epic = _Epic<AppAction, AppAction, AppState>;

export const rootReducer = combineReducers({ products: productsReducer });

const epicMiddleware = createEpicMiddleware<AppAction, AppAction, AppState>();

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(epicMiddleware)));

epicMiddleware.run(rootEpic);
