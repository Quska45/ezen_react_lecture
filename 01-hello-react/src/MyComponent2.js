import React from 'react';

// 직접 작성한 컴포넌트 참조 --> 정의한 이름을 HTML태그처럼 사용.
import MySubComponent from './MySubComponent';

/** 함수형 컴포넌트를 익명 함수 스타일로 정의 */
const MyComponent2 = function() {
    return (
        <div>
            <h2>Virtual DOM</h2>
            <p>This is React Component</p>

            <MySubComponent />
        </div>
    );
}

export default MyComponent2;