# SPA (Single Page Application)

## 프로젝트 생성 및 실행

```shell
yarn create react-app 프로젝트이름
```

프로젝트를 VSCode로 열고, `Ctrl` + `~`를 눌러 터미널 실행

```shell
yarn add react-router-dom
yarn start
```

## 프로젝트 생성 후 기초작업

1. **.jshintrc** 파일 복사.
2. **src폴더** 하위에서 App.css와 index.css, logo.svg 삭제
3. **App.js** 파일에서 App.css와 logo.svg에 대한 참조(import) 구문 제거
4. **index.js** 파일에서 index.css에 대한 참조(import) 구문 제거


## Single Page Application (=SPA)

하나의 HTML 페이지로 다수의 페이지 효과를 내는 구현 방식.

js 파일로 웹 페이지 화면을 변경하는 형태로 구현된다.

## Router

분배하는 기능을 수행하는 소프트웨어나 하드웨어

대표적인 라우터로는 아이피공유기가 있다.

React의 Router는 URL에 의해 컴포넌트를 분배하는 기능을 한다.

HTML5에서 Javascript에 추가된 기능중 history객체를 통해 URL을 변조하는 기능이 있다.

리액트의 Router는 이 기능을 활용하여 현재 페이지의 URL을 다양하게 변조하여 거기에 각각의 컴포넌트를 분배한다.

### SPA개발의 장점

페이지 이동 없이 화면이 갱신되므로 실제로 네트워크 통신이 발생하지 않아 화면 갱신 속도가 빠르다.

### SPA개발의 단점

JS코드가 비대해 질 수 있다. 코드 스플리팅 기법으로 해결가능(코드 분할 작성)

하나의 HTML이므로 SEO에 취약하다 (서버사이드 렌더링으로 해결 가능)

서버사이드 랜더링 = React + Node / React + PHP / React + Java(Spring)

-----------------------

## 이 단원에서 다루는 내용

1. 리액트 컴포넌트로 페이지 나누기
2. HTTP GET 파라미터 처리하기
3. PATH 파라미터 처리하기
4. 404 에러 대비하기


## 이 단원에서 다루지 못하는 내용

1. `NavLink`를 사용하여 현재 머물고 있는 링크에 CSS 적용하기
   > 컴포넌트에 css 적용하는 방법 학습후 제시
2. `History`제어하기
   > 컴포넌트 라이프 사이클과 hook이라는 내용 학습 후 제시