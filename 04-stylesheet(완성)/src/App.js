import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';

import InlineCss from './components/InlineCss';
import CssClass from './components/CssClass';
import CssModule from './components/CssModule';
import Scss from './components/Scss';
import ScssModule from './components/ScssModule';
import StyledComponent from './components/StyledComponent';

const App = () => {
    return (
        <div>
            <h1>04-stylesheet</h1>

            {/* Link 구성 */}
            <Link to='/inline_css'>[InlineCss]</Link>
            <Link to='/css_class'>[CssClass]</Link>
            <Link to='/css_module'>[CssModule]</Link>
            <Link to='/scss'>[Scss]</Link>
            <Link to='/scss_module'>[ScssModule]</Link>
            <Link to='/styled_component'>[StyledComponent]</Link>
            <hr />

            <Switch>
                <Route path="/inline_css" component={InlineCss} />
                <Route path="/css_class" component={CssClass} />
                <Route path="/css_module" component={CssModule} />
                <Route path="/scss" component={Scss} />
                <Route path="/scss_module" component={ScssModule} />
                <Route path="/styled_component" component={StyledComponent} />
            </Switch>
        </div>
    );
};

export default App;
