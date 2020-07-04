import React from 'react';
import Category from '../components/Category';
import NewsList from '../components/NewsList';

class NewsPage extends React.Component {
    render() {
        // 전체 Path 파라미터 받아오기
        const { params } = this.props.match;

        // 로그로 확인
        console.group('NewsPage');
        console.debug(this.props.match);
        console.debug(params);
        console.groupEnd();

        return (
            <div>
                <Category />
                <hr />
                <NewsList category={params.category} />
            </div>
        );
    }
}

export default NewsPage;
