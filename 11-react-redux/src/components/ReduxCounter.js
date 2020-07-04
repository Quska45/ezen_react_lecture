import React from 'react';

/**
 * 일반적인 컴포넌트 정의
 * 컴포넌트가 다루어야 할 데이터와 동작해야 하는 이벤트 핸들러는 모두 props를 통해 주입받는다.
 */
const ReduxCounter = (props) => {
    return (
        <div>
            <h1 style={{color: props.color}}>{props.number}</h1>
            <div>
                <button onClick={() => {props.onPlusClick()}}>+1</button>
                <button onClick={() => {props.onMinusClick()}}>-1</button>
            </div>
        </div>
    );
};

export default ReduxCounter;