import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { createLogger } from 'redux-logger'
// import thunkMiddleware from 'redux-thunk'
import { searchVtubers, enableDarkMode } from './reducer'
import './index.css';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';
import 'tachyons';

const logger = createLogger()

const rootReducer = combineReducers({ searchVtubers, enableDarkMode })

// 만약 여러개의 리듀서를 사용한다면 combineReducers를 이용하면 된다
// thunk는 오브젝트가 아닌 함수를 반환하는 액션을 감시한다.

// 미들웨어는 액션에서 리듀서로 가는 길목에서 존재하여 일한다 보면 됨
// 예시로는 logger, thunk 가 있다.
// createStore 의 첫번째 인자는 리듀서, 두번째는 미들웨어
const store = createStore(rootReducer, applyMiddleware(logger))

// react-redux는 리덕스를 리액트와 같이 사용하기 편하게 만들어주는 라이브러리이다.
// index에서는 App을 Provider로 감싸주면됨

ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
