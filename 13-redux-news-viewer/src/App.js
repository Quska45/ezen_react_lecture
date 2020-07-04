import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NewsPage from './pages/NewsPage';

const App = () => {
    return (
        <div>
            <h1>13-Redux-News-Viewer</h1>
            <Switch>
                {/* Path 파라미터로 카테고리 값을 받는 페이지 구성 */}
                {/* ":변수이름?" 에서 물음표는 해당 변수가 선택적이라는 의미 */}
                <Route path='/:category?' component={NewsPage} />
            </Switch>
        </div>
    );
};

export default App;
