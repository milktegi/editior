import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import penderMiddleware from 'redux-pender';
import * as modules from './modules';

const reducers = combineReducers(modules);
const middlewares = [penderMiddleware()];

//개발 모드일때만 Redux Devtools를 적용합니다.
const isDev = 
process.env.NODE_ENV === 'development';
const devtools = isDev 
&& window.__REDUX_DEVTOOLS_EXTENSTION_COMPOSE__;
const composeEnhancers 
= devtools || compose;

//preloadedState는 추후 서버사이드 렌더링을 했을 떼
//전달받는 초기 상태입니다.
const configure = preloadedState =>
  createStore(
    reducers,
    preloadedState,
    composeEnhancers(applyMiddleware(...middlewares))
  );

export default configure;
