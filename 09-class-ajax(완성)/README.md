# 프로젝트 생성 후 초기화 작업

1. 프로젝트 폴더 안에서 패키지 설치
    ```shell
    yarn add react-router-dom
    yarn add styled-components
    yarn add axios
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


# Open API 신청

> https://newsapi.org/

사이트 접속 후 메인의 "Get API Key" 버튼 클릭 후 가입양식 작성 후 APIKEY를 발급받는다.

> https://newsapi.org/v2/top-headlines?country=kr&apiKey=발급받은KEY&catgory=???


# ClassComponent vs FunctionComponent

## Class기반

	- React.component를 상속받는 클래스 형태로 구성
	- render() 함수를 정의하고 이 함수가 리턴하는 JSX가 화면을 구성
	- props, children 값등을 객체 자신(this)을 통해서 접근해야 함
	- propTypes, defaultProps, 이벤트 핸들러 등 추가적으로 정의해야 하는 형태에 준수해야할 scope가 존재
	- LifeCycle이라는 정해진 규격 안에서 흐름을 제어

## Function 기반

	- 일반 자바스크립트 함수
	- 자신이 리턴하는 JSX가 화면을 구성
	- 전달되는 파라미터 형태로 props, children 값에 접근
	- Inner Fucntion, 함수 밖에서 상수 형태로 정의 등 모든 형태가
                   유연하게 가능함.
	- Hook을 통해서 흐름을 제어