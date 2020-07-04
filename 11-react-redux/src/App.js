import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';

import NormalCounter from './components/NormalCounter';
import CounterContainer from './containers/CounterContainer';
import CounterContainerHook from './containers/CounterContainerHook';

const App = () => {
    // 활성 링크에 적용할 InlineCSS 정의
    const myStyle = {
        fontWeight: 'bold',
        color: '#b82514',
        textDecoration: 'none'
    };

    return (
        <div>
            <h1>React Redux</h1>

            <NavLink activeStyle={myStyle} to="/normal_counter">[NormalCounter]</NavLink>
            <NavLink activeStyle={myStyle} to="/counter_container">[CounterContainer]</NavLink>
            <NavLink activeStyle={myStyle} to="/counter_container_hook">[CounterContainerHook]</NavLink>

            <Switch>
                <Route path='/normal_counter' component={NormalCounter} />
                <Route path='/counter_container' component={CounterContainer} />
                <Route path='/counter_container_hook' component={CounterContainerHook} />
            </Switch>
        </div>
    );
};

export default App;
