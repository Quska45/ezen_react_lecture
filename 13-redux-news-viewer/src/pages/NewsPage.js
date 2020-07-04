import React from 'react';
import Category from '../components/Category';
import NewsContainer from '../containers/NewsContainer';

/**
 * 뉴스 페이지.
 * -> Router에 의해서 호출되는 대상이므로 GET,Path 파라미터는 이 페이지에서 수신가능
 * @param {*} props 
 */
const NewsPage = ({match}) => {
    // 전체 Path 파라미터 받아오기
    const {params} = match;

    return (
        <div>
            <Category />
            <hr />
            <NewsContainer category={params.category} />
        </div>
    );
};

export default NewsPage;