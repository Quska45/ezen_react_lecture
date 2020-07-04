import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

// route를 사용하기 위해 react-router-dom 패키지에서 BrowserRouter함수만 골라서 import
// --> HTML5의 History API를 사용하여 페이지 새로고침 없이 URL을 변경하는 기능을 제공한다.
import { BrowserRouter } from 'react-router-dom';

// BrowserRouter 컴포넌트로 전체 앱을 감싼다.
ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
