import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import ImageSearch from './pages/ImageSearch';

/**
 * 웹앱을 구성하는 여러 페이지들을 Route로 묶는 역할
 */
const App = () => {
    return (
        <div>
            <Switch>
                {/* 검색폼의 submit 이벤트가 발생하게 되면 검색어를 path 파라미터로 전달하게 된다.
                    검색파라미터가 존재할 경우에 대한 변수이름을 query로 지정한다. */}
                <Route path='/:query?' component={ImageSearch} />
            </Switch>
        </div>
    );
};

export default App;
