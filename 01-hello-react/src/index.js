/**
 * 프로그램 시작점.
 * - 향후 Redux 라는 패키지를 사용하기 전까지는 작업 안함.
 */
import React from 'react';
import ReactDOM from 'react-dom';
// App.js를 가져온다.
import App from './App';
import * as serviceWorker from './serviceWorker';

/** 컴포넌트를 페이지에 랜더링한다. */
// App.js에서 정의한 `App`이라는 이름의 컴포넌트를 HTML 태그처럼 사용한다.
// -> 첫 번째 파라미터: 사용할 컴포넌트
// -> 두 번째 파라미터: 컴포넌트를 출력할 public/index.html 페이지에 정의되어 있는 요소
// 프로그램 실행시 "http://localhost:3000/" 에 대응되는 위치가 public 폴더.
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
