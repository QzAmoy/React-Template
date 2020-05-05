import { applyMiddleware, createStore, compose } from 'redux';
import loggerMiddleware from 'redux-logger';
import rootReducer, { RootState } from './store';

export default function configureStore(preloadedState?: RootState) {
  const middlewares = [loggerMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  // const enhancers = [middlewareEnhancer];
  const composedEnhancers = compose(middlewareEnhancer);

  const store = createStore(rootReducer, preloadedState, composedEnhancers);

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./store', () => store.replaceReducer(rootReducer));
  }

  return store;
}
