import { applyMiddleware, createStore } from 'redux';
import loggerMiddleware from 'redux-logger';
import rootReducer, { RootState } from '.';

export default function configureStore(preloadedState?: RootState) {
  const middlewares = [loggerMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const store = createStore(rootReducer, preloadedState, middlewareEnhancer);

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('.', () => store.replaceReducer(rootReducer));
  }

  return store;
}
