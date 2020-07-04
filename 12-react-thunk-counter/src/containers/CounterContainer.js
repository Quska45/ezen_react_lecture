/**
 * 컨테이너 컴포넌트 - 디스패치 처리를 구현한다.
 */
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ReduxCounter from '../components/ReduxCounter';

// 모듈의 모든 기능을 통째로 가져온다.
import * as counterModule from '../modules/Counter';

/**
 * 모듈객체와 비동기 작업을 수행하기 위한 함수들에 대한 action객체를 파라미터로 받는다.
 */
const CounterContainer = ({ counterModule, action }) => {
    const { number, color } = counterModule;
    const { plusAsync, minusAsync } = action;

    // 모듈로부터 전달받은 값을 컴포넌트에게 props로 전달하여 그 결과를 리턴한다.
    return <ReduxCounter 
                number={number} 
                color={color} 
                onPlusClick={plusAsync} 
                onMinusClick={minusAsync} 
            />;
};

/** 스토어에 상태값과 action을 전달하는 함수를 연결하여 디스패치 하는 처리를 구현함.(고정코드) */
export default connect(
    // state값을 그대로 리턴
    state => state,
    dispatch => ({
        // counterModule에 정의된 action함수들을 "action"이라는 객체에 포함시켜 컴포넌트의 props로 전달함
        action: bindActionCreators(counterModule, dispatch)
    })
)(CounterContainer);
