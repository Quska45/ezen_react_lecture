# nextjs app 만들기

## 프로젝트 생성
```shell
yarn create next-app 프로젝트이름
```

## 의존성 설치

```shell
yarn add styled-components
yarn add babel-plugin-styled-components
yarn add next-routes
yarn add axios
```

## styled-component 동작 설정

프로젝트 루트에 `.babelrc` 파일을 생성하고 다음의 내용을 작성한다.

```js
{
    "presets": ["next/babel"],
    "plugins": [
        [
            "styled-components",
            {
                "ssr": true,
                "displayName": true,
                "preprocess": false
            }
        ]
    ]
}
```

## 기본 파일 준비

- /pages/_app.js
- /pages/_document.js
- /pages/_error.js
- /components/header.js
- /components/footer.js



## 프로젝트 구동하기

### 개발용
```shell
yarn dev
```

### 프로젝트 완성 후 빌드
```shell
yarn build
```

### 빌드 결과물 구동하기
```shell
yarn start
```
