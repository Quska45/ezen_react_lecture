# 프로젝트 생성 후 초기화 작업

1. 프로젝트 폴더 안에서 패키지 설치
    ```shell
    yarn add react-router-dom
    yarn add styled-components
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
----------------

# 컴포넌트 종류

## 클래스 컴포넌트

React 오리지널 컴포넌트

지금까지의 예제들 처럼 함수 형태로 정의하는 것이 아닌 class 형태로 정의하는 컴포넌트.

함수형 컴포넌트보다 구문이 복잡하고 길다.

함수형 컴포넌트보다 구문이 좀 더 명확하다.

클래스 안에 통칭 LifeCycle이라는 미리 정해진 함수들을 통해 화면의 갱신 시점이나 변수값의 변경 시점에 화면을 어떻게 처리할지 정의할 수 있다.

## 함수형 컴포넌트

클래스 컴포넌트보다 구문이 간결하지만 그만큼 더 난해할 수 있다.

리액트 버전 16이후에 LifeCycle을 처리할 수 있는 hook이라는 기능이 도입되면서
React에서 공식적으로 권장하는 컴포넌트 작성 방법


----------------

# 컴포넌트의 특성

## props

컴포넌트를 사용하는 부모로부터 전달받는 변수값

흔히 컴포넌트에게 HTML 속성 같은 형태로 전달됩니다.

props는 값이 변할 수 없다.

## children

컴포넌트를 사용하는 부모로부터 전달받는 내용.

컴포넌트의 시작~끝 태그 사이에 기술되는 내용

```
<MyComponent>여기서 Children전달</MyComponent>
```

## state

컴포넌트 자체적으로 갖는 데이터.

화면에 표시하고자 하는 데이터 값.

앞으로 다루게 될 React의 Lifecycle, Hook, Redux 등의 기법들은 모두 state값과 연관있다.


## PropTypes

```js
컴포넌트이름.PropTypes = {
  // 기본 데이터 타입
  optionalArray: PropTypes.array,
  optionalBool: PropTypes.bool,
  optionalFunc: PropTypes.func,
  optionalNumber: PropTypes.number,
  optionalObject: PropTypes.object,
  optionalString: PropTypes.string,
  optionalSymbol: PropTypes.symbol,

  // 렌더링 할 수있는 것 : 숫자, 문자열, 요소 또는 이러한 유형을 포함하는 배열 
  optionalNode: PropTypes.node,

  // 리액트 객체.
  optionalElement: PropTypes.element,

  // 특정 클래스 타입으로 정의
  optionalMessage: PropTypes.instanceOf(클래스이름),

  // 배열에 명시된 값중의 하나여야 함
  optionalEnum: PropTypes.oneOf(['News', 'Photos']),

  // 배열에 명시된 타입중 하나여야 함
  optionalUnion: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.instanceOf(Message)
  ]),

  // 특정 유형의 배열
  optionalArrayOf: PropTypes.arrayOf(PropTypes.number),

  // 특정 유형의 속성 값을 가진 객체
  optionalObjectOf: PropTypes.objectOf(PropTypes.number),

  // 특정 속성값들로 이루어진 객체
  optionalObjectWithShape: PropTypes.shape({
    color: PropTypes.string,
    fontSize: PropTypes.number
  }),

  // 필수 여부는 뒤에 ".isRequired"만 명시
  requiredFunc: PropTypes.func.isRequired,

  // 타입은 상관 없고 값이 있기만 하면 됨
  requiredAny: PropTypes.any.isRequired,
}
```