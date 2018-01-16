import React from 'react';
import {Route,Switch} from 'react-router-dom';

import Home from './components/Home';
import Post from './components/Post';
import Login from './components/Login';
import Signup from './components/Signup';

const Routes = () =>(
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/Post' component={Post} />
        <Route path='/Login' component={Login} />
        <Route path='/Signup' component={Signup} />

    </Switch>

)

export default Routes;