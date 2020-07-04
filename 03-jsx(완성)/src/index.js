import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

// route를 사용하기 위해 import
// --> HTML5의 History API를 사용하여 페이지 새로고침 없이 URL을 변경하고,
//     현재 URL에 관련된 정보를 props로 조회하거나 활용할 수 있게 하는 기능을 제공한다.
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
