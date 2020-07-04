/**
 * 컨테이너 컴포넌트 - 디스패치 처리를 구현한다.
 */
import React from 'react';
import { connect } from 'react-redux';
import ReduxCounter from '../components/ReduxCounter';
import { plusAction, minusAction } from '../modules/Counter';

/**
 * 스토어로부터 상태값과 모듈에 정의된 state값과 action함수들을 전달받는 컴포넌트
 * module = {number: 0, color: "#000", plusAction: ƒ, minusAction: ƒ}
 */
const CounterContainer = module => {
    const { number, color, plusAction, minusAction } = module;

    // 모듈로부터 전달받은 값을 컴포넌트에게 props로 전달하여 그 결과를 리턴한다.
    return (
        <ReduxCounter
            number={number}
            color={color}
            onPlusClick={plusAction}
            onMinusClick={minusAction}
        />
    );
};

/** 스토어에 상태값과 action을 전달하는 함수를 연결하여 디스패치 하는 처리를 구현함. */
// const getState = state => ({
//     number: state.counterModule.number,
//     color: state.counterModule.color
// });
//const actions = { plusAction, minusAction };

//스토어에 연결하기위해 connect() 함수 호출 --> 리턴되는 객체는 함수
//const dispatch = connect(getState, actions);

//스토어에 연결된 함수를 통해 이 컴포넌트 자체를 디스패치 한 결과 형태로 내보낸다.
//export default dispatch(CounterContainer);

export default connect(
    state => ({
        number: state.counterModule.number,
        color: state.counterModule.color
    }),
    { plusAction, minusAction }
)(CounterContainer);
