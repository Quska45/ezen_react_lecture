import React from 'react';
import NewsItem from './NewsItem';

const NewsList = ({result, loading, error}) => {

    // 로딩중 메시지 표시
    if (loading) {
        return <h2 style={{color: 'green'}}>Now Loading ...</h2>;
    }

    // 에러 메시지 표시
    if (error) {
        return <h2 style={{color: 'red'}}>{error}</h2>;
    }

    return (
        <div>
            {/* 기사 데이터 수 만큼 목록의 아이템을 표시함 */}
            {result.map((item, index) => (
                <NewsItem key={index} item={item} />
            ))}
        </div>
    );
};

export default NewsList;