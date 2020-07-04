import React from 'react';

const Sub1 = (props) => {
    return (
        <div>
            <h3>여기는 sub1 입니다.</h3>
            <p>{props.location.pathname}</p>
        </div>
    );
};

export default Sub1;