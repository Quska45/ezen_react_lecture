import React from 'react';
import Category from '../components/Category';
import NewsList from '../components/NewsList';

/**
 * 뉴스 페이지.
 * -> Router에 의해서 호출되는 대상이므로 GET,Path 파라미터는 이 페이지에서 수신가능
 * @param {*} props 
 */
const NewsPage = ({match}) => {
    // 전체 Path 파라미터 받아오기
    const {params} = match;

    // 로그로 확인
    console.group("NewsPage");
    console.debug(match);
    console.debug(params);
    console.groupEnd();

    return (
        <div>
            <Category />
            <hr />
            <NewsList category={params.category} />
        </div>
    );
};

export default NewsPage;