import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import './assets/css/style.css';
import MyState from './components/MyState';
import MyEffect from './components/MyEffect';
import StateEffectEx from './components/StateEffectEx';

const App = () => {
    return (
        <div>
            <h1>06-hook-event</h1>

            <NavLink className='normalLink' activeClassName='activeLink' to='/mystate'>
                MyState
            </NavLink>
            <NavLink className='normalLink' activeClassName='activeLink' to='/myeffect'>
                MyEffect
            </NavLink>
            <NavLink className='normalLink' activeClassName='activeLink' to='/state_effect_ex'>
                StateEffectEx
            </NavLink>

            <Switch>
                <Route path='/mystate' component={MyState} />
                <Route path='/myeffect' component={MyEffect} />
                <Route path='/state_effect_ex' component={StateEffectEx} />
            </Switch>
        </div>
    );
};

export default App;
