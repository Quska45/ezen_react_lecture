import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

/** SPA 구성을 위한 참조 */
import { BrowserRouter } from 'react-router-dom';

/** 리덕스를 위한 참조 추가 */
// 리덕스에서 스토어 생성 함수와 미들웨어 처리 함수 가져오기
import { createStore, applyMiddleware } from 'redux';

// 전체 App을 리덕스에 구독시키기 위해 위해 Provder라는 객체를 가져온다.
import { Provider } from 'react-redux';

// 크롬 개발자 도구에 설치된 확장도구와 연동하기 위한 함수
import { composeWithDevTools } from 'redux-devtools-extension';

/** 미들웨어를 위한 참조 추가 */
// 미들웨어 불러오기
import { createLogger } from 'redux-logger';
import ReduxThunk from 'redux-thunk';

/** 리덕스 스토어에 등록시킬 모듈들 일괄 참조 */
// modules폴더(직접 생성해야 함)에 정의된 모든 action과 action 생성 함수 및 초기 상태값들을 묶음으로 가져온다.
import rootReducer from './modules';

/** 리덕스 스토어 생성 */
// 로그를 생성하는 미들웨어 객체 만들기 --> 다른 미들웨어들보다 우선적으로 적용하는 것이 좋다.
const logger = createLogger();

// --> 미들웨어와 크롬 개발자 도구 연동을 적용한 스토어 생성 (개발용 코드, 완성 후 기본코드로 전환 필요)
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, ReduxThunk)));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
