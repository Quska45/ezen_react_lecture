import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NewsPage from './pages/NewsPage';

/**
 * 프로그램 본체
 * 
 * 아래의 구조로 연결됨.
 * App --(route)--> NewsPage --> Category
 *                           --> NewsList --> NewsItem
 */
const App = () => {
    return (
        <div>
            <h1>06-Simple-Ajax</h1>

            <Switch>
                {/* Path 파라미터로 카테고리 값을 받는 페이지 구성 */}
                {/* ":변수이름?" 에서 물음표는 해당 변수가 선택적이라는 의미 */}
                <Route path='/:category?' component={NewsPage} />
            </Switch>
        </div>
    );
};

export default App;
