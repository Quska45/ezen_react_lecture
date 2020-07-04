import React from 'react';

// 부모 컴포넌트로부터 전달받는 속성값들은 함수 파라미터로 전달되는 객체에 프로퍼티 형식으로 포함된다.
const MyPropsSub = (props) => {

    console.group("MyPropsSub");
    console.dir(props);
    console.groupEnd();

    return (
        <div>
            <h3>MyPropsSub</h3>
            <p>
                제 이름은 <b>{props.name}</b>이고 나이는 <b>{props.age}</b>입니다.
            </p>
        </div>
    );
};


// 속성값이 전달되지 않을 경우에 대비하여 기본값을 JSON으로 정의해 둘 수 있다. (객체이름 고정)
MyPropsSub.defaultProps = {
    name: 'unknown',
    age: 0
};

export default MyPropsSub;