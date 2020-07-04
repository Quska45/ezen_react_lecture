import React from 'react';

import PropTypes from 'prop-types';

// props 파라미터를 비구조 문법으로 나누는 구문을 생략하고
// 파라미터에 비구조 문법을 직접 정의하는 형태.
const MyChildrenSub = ({width, height, children}) => {

    const myStyle = {
        width: width + 'px',
        height: height + 'px',
        border: '5px solid #d5d5d5',
        margin: '10px'
    };

    return (
        <div>
            <h3>MyChildrenSub</h3>
            <p style={myStyle}>{children}</p>
        </div>
    );
};

// // 속성들에 대한 타입 정의
MyChildrenSub.propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    children: PropTypes.string
};

// // 속성들에 대한 기본값을 JSON으로 정의 (객체이름 고정)
MyChildrenSub.defaultProps = {
    width: 300,
    height: 100,
    children: '내용이 없습니다.'
};

export default MyChildrenSub;