# 프로젝트 생성 후 초기화 작업

1. 프로젝트 폴더 안에서 패키지 설치
    ```shell
    yarn add react-router-dom
    yarn add styled-components
    yarn add axios              (여기서는 사용 안함)
    yarn add redux
    yarn add react-redux
    yarn add redux-actions
    yarn add redux-devtools-extension
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

------------------------

# React에서 리덕스를 활용하는 일반적인 패턴

프레젠테이션 계층과 컨테이너 계층을 분리하는 형태.

## 프레젠테이션 계층
- props를 받아와서 화면에 UI를 보여주기만 하는 역할
- 일반적인 컴포넌트 

## 컨테이너 계층
- 리덕스와 연동되는 화면을 갖지 않는 컴포넌트
- 상태를 받아오거나 스토어에 액션을 디스패치 한다.
- 액션을 디스패치하면 상태값이 변경되는 함수가 실행된다.
- 상태값은 프레젠테이션 계층 컴포넌트의 props로 사용된다.

```
                       ---- 액션 디스패치 --->
    [ 컨테이너 컴포넌트 ]                      [ 리덕스 스토어 ]
          ↓            <---- 스토어 상태 -----
        Props
          ↓
    [ 프레젠테이션 컴포넌트 ]
```

> action과 action리턴 함수가 정의된 파일을 module이라는 이름으로 작성


---------------------------

# 리덕스 미들웨어

액션을 디스패치했을 때 리듀서에서 이를 처리하기에 앞서 실행되는 사전에 지정된 작업들.

미들웨어는 index.js에서 스토어를 생성하는 과정에서 적용한다.

## 미들웨어로 수행하는 처리들

- 전달받은 액션을 단순히 콘솔에 기록
- 전달받은 액션 정보를 기반으로 액션을 아예 취소
- 다른 종류의 액션을 추가로 디스패치


## 동작순서

  [액션] --> [미들웨어] --> [리듀서] --> [스토어]


## 미들웨어로 동작하는 함수의 기본 구조

### 함수를 반환하는 함수를 반환하는 함수

```js
function MyMiddleWare(store) {
    return function(next) {
        return function(action) {
            // 미들웨어 기본 구조
        }；
    }；
}；
export default MyMiddleWare
```

### 화살표 함수로 축약한 형태

```js
const MyMiddleWare = store => next => action => {
    // 미들웨어 기본 구조
}；

export default MyMiddleWare
```

- store : 리덕스 스토어 인스턴스
- action : 디스패치된 액션
- next : 다음 작업으로 넘어가기 위한 함수.
  - next(action) 을 호출하면 다음 미들웨어로 액션을 넘겨준다.
  - 그 다음 미들웨어가 없다면 리듀서에게 액션을 넘겨준다.

미들웨어 내부에서 store.dispatch를 사용하면 첫 번째 미들웨어부터 다시 처리한다.

만약 미들웨어에서 next(action)을 사용하지 않으면 액션이 리듀서에 전달되지 않는다.


## 일반적으로 많이 사용하는 오픈소스 미들웨어

- redux-logger : 브라우저 콘솔에 로그를 기록하는 기능
- redux-thunk : 비동기 작업을 위한 미들웨어 (주로 Timer, Ajax 등)
- redux-saga : 비동기 작업을 위한 미들웨어 (주로 Timer, Ajax 등)

> redux-thunk 와 redux-saga는 서로 경쟁 상태