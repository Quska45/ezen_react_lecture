import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

const SearchInput = styled.input`
    padding: 7px 10px;
    font-size: 14px;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    margin-right: 5px;
`;

const SearchButton = styled.button`
    padding: 5px 15px 7px 15px;
    font-size: 14px;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    color: #fff;
    background-color: #007bff;
    border-color: #007bff;
    cursor: pointer;
    transition: all 0.1s;

    &:hover {
        background-color: #0069d9;
        border-color: #0062cc;
    }

    &:active {
        transform: scale(0.95, 0.95);
    }
`;

const ImageForm = ({history}) => {
    // createRef() 함수를 통해 참조변수를 생성
    const searchInput = React.createRef();

    // form의 submit 이벤트
    const onSubmitListener = e => {
        // submit에 의한 페이지 이동 방지
        e.preventDefault();

        // 검색어를 Path 파라미터로 적용하여 URL을 변경
        // --> App.js에 설정된 <Route>가 재동작 
        //     --> pages/ImageSearch 가 호출되면서 ImageList에게 검색어를 props로 전달
        history.push("/" + searchInput.current.value);
    };

    return (
        <form onSubmit={onSubmitListener}>
            <SearchInput type='search' ref={searchInput} placeholder='검색어를 입력하세요' />
            <SearchButton type='submit'>검색</SearchButton>
        </form>
    );
};

// 컴포넌트를 내보낼 때 withRouter라는 함수로 가공하면
// 이 컴포넌트로 전달되는 props에는 location, match, history 등의 Router 객체가 포함된다.
export default withRouter(ImageForm);