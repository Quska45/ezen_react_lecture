import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';

import MyProps from './components/MyProps';
import MyPropTypes from './components/MyPropTypes';
import MyChildren from './components/MyChildren';

const App = () => {

    // 활성 링크에 적용할 InlineCSS 정의
    const myStyle = {
        fontWeight: 'bold',
        color: '#b82514',
        textDecoration: 'none'
    };

    return (
        <div>
            <h1>05-component</h1>
            {/* NavLink는 현재 머물고 있는 URL에 적용할 CSS를 지정할 수 있다. */}
            <NavLink activeStyle={myStyle} to="/myprops">[MyProps]</NavLink>
            <NavLink activeStyle={myStyle} to="/myproptypes">[MyPropTypes]</NavLink>
            <NavLink activeStyle={myStyle} to="/mychildren">[MyChildren]</NavLink>

            {/* Route 처리할 컴포넌트 정의 */}
            <Switch>
                <Route path="/myprops" component={MyProps} />
                <Route path="/myproptypes" component={MyPropTypes} />
                <Route path="/mychildren" component={MyChildren} />
            </Switch>
        </div>
    );
};

export default App;
