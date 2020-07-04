import React from 'react';
import styled from 'styled-components';

// 'react-redux' 패키지에서 제공하는 hook 함수
import { useSelector, useDispatch } from 'react-redux';
// 이미지 항목 하나를 표시하기 위한 컴포넌트
import ImageItem from '../components/ImageItem';
// 모듈기능 참조
import * as kakaoImageSearchModule from '../modules/KakaoImageSearch';

/** 전체 검색결과를 구성할 박스 */
const ImageListBox = styled.div`
    &:after {
        content: '';
        display: block;
        float: none;
        clear: both;
    }
`;

const ImageList = (props) => {
    /** Hook 기능을 통해 상태값 가져오기 */
    // -> useSelector()함수에 전달하는 콜백함수가 호출되면서 state 파라미터로 module의 상태값들이 전달된다.
    //    이 상태값들 중 사용하고자 하는 값들만 별도의 JSON으로 묶어 리턴받아 사용한다.
    const { result, loading, error } = useSelector(state => {
        return {
            ...state.kakaoImageSearchModule
        };
    });

    /** action함수를 dispatch 시키기 위한 기능 가져오기 */
    const dispatch = useDispatch();

    /** props.query 값이 변경될 때만 실행되는 hook 정의 */
    // 여기서 모듈에 정의해 놓은 thunk 함수를 dispatch하면 redux의 액션 함수가 실행되면서 상태값을 갱신하게 된다.
    React.useEffect(() => {
        dispatch(kakaoImageSearchModule.imageSearchAsync(props.query));
    }, [props.query]);

    /** 로딩중 */
    if (loading) { return <h2 style={{color: '#00f'}}>검색중입니다...</h2>; }

    /** 에러 발생시 */
    if (error) { return <h2 style={{color: '#f00'}}>{error}</h2>; }

    /** 검색 결과 없음 */
    if (!result || result.length < 1) { return <h2 style={{color: '#f90'}}>검색결과가 없습니다.</h2>; }

    /** 검색결과 표시 */
    return (
        <ImageListBox>
            {/* 검색결과 데이터 수 만큼 목록의 아이템을 표시함 */}
            {result.map((item, index) => (
                <ImageItem key={index} item={item} />
            ))}
        </ImageListBox>
    );
};

/* Hook방식으로 Redux를 사용할 경우 컴포넌트 최적화를 위해 memo 기능을 활용. */
export default React.memo(ImageList);