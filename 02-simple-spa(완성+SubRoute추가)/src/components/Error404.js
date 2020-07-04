import React from 'react';

/**
 * 허용되지 않는 URL로 접근할 경우 표시될 페이지
 * @param {*} props 
 */
const Error404 = props => {
    return (
        <div>
            <h2>404 Page Not Found</h2>
            <h3>"{props.location.pathname}" 페이지는 존재하지 않습니다.</h3>
        </div>
    );
};

export default Error404;