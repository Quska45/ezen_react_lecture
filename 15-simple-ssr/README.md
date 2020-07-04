# 프로젝트 생성 후 초기화 작업

1. 프로젝트 폴더 안에서 패키지 설치
    ```shell
    yarn add react-router-dom
    yarn add styled-components
    yarn add axios
    yarn add redux
    yarn add react-redux
    yarn add redux-actions
    yarn add redux-devtools-extension
    yarn add redux-logger
    yarn add redux-thunk
    ```

2. `/src` 폴더 안에서 App.css, index.css, logo.svg 삭제
3. App.js 파일과 index.js 파일에서 삭제한 파일 관련 구문 삭제
4. index.js 파일에서 다음의 구문 추가
    ```js
    import { BrowserRouter } from 'react-router-dom';
    ```
5. index.js 파일에서 `<App />`을 `<BrowserRouter><App /></BrowserRouter>`로 변경
6. App.js 파일에 다음을 추가
    ```js
    import { Route, Link, Switch } from "react-router-dom";
    ```
---------------

# 리덕스 스토어 구성하기

## 기능별 모듈(Reducer)을 결합할 준비

### /src/modules/index.js

폴더와 파일을 직접 생성한다.

```js
import { combineReducers } from 'redux';

export default combineReducers({
    // 앞으로 추가될 모듈들이 이 위치에서 리덕스에 추가된다.    
});
```

## 리덕스 스토어 구성하기

### /src/index.js

#### 1) 리덕스를 위한 참조 추가

```js
/** 리덕스를 위한 참조 추가 */
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import rootReducer from './modules';
```

#### 2) 리덕스 스토어 생성
```js
/** 리덕스 스토어 생성 */
const logger = createLogger();
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, ReduxThunk)));
```

#### 3) 렌더링 처리

렌더링 처리를 `<Provider store={store}>` 태그로 감싼다.
```js
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
```

--------------------------


# 서버사이드 렌더링

## #01. 패키지 설치

```shell
yarn add webpack-node-externals
```


## #02. 숨겨져 있는 웹 팩 설정 꺼내기

git commit을 수행하기 전에는 eject가 실행되지 않음.

```shell
git add --all
git commit -m "웹팩 설정 전 초기화 처리"
yarn eject
```

> 명령의 실행 결과로 숨겨져 있던 웹팩 설정 파일들이 `/config` 폴더에 배치된다.


## #03. ssr 초기화 파일 작성

### /src/index.server.js

```js
/**
 * 서버사이드 렌더링용 초기화 파일
 */
import React from 'react';
import ReactDOMServer from 'react-dom/server';

const html = ReactDOMServer.renderToString(
    <div>Hello Server Side Redering!!!</div>
);

console.log(html);
```


## #04. `/config/paths.js`에 작성한 초기화 파일에 대한 경로 명시

exports 되는 항목에 다음의 두 항목 추가

`module.exports = { ... }` 내부에 아래의 코드를 적용한다.

```js
// 서버사이드 렌더링 시작파일
ssrIndexJs: resolveApp('src/index.server.js'),
// 웹팩 처리 후 저장 경로
ssrBuild: resolveApp('dist')
```

## #05. 웹팩 설정 파일(`/config/webpack.config.server.js`) 생성

아래 내용 적용하기

> **ssr배포용코드**에 포함되어 있는 소스파일을 복사함.


## #06. 빌드 스크립트 파일(`/scripts/build.server.js`) 생성

아래 내용 적용하기

> **ssr배포용코드**에 포함되어 있는 소스파일을 복사함



## #07. 결과확인

### 1) 빌드하기

```shell
node scripts/build.server.js
```

> 명령이 잘 실행되고 나면 `/dist/server.js` 파일이 생성된다.

### 2) 실행하기

```shell
node dist/server.js
```

### 3) 단축 명령 등록

`/package.json` 파일의 "scripts" 부분에 다음의 두 줄 추가

```js
"scripts": {
    ...,
    "start-server": "node dist/server.js",
    "build-server": "node scripts/build.server.js"
}
```

이후 다음의 두 명령어로 서버 빌드 및 실행 가능함

```shell
yarn build-server
yarn start-server
```

## #08. Express 모듈을 통해 서버 페이지 작성하기

### 1) 패키지 추가

```shell
yarn add express
```

### 2) index.server.js

기본 코드를 **ssr배포용코드**에 포함되어 있는 소스파일로 대체

