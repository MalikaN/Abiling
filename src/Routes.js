import React from 'react';
import {Route,Switch,Redirect} from 'react-router-dom';
import Home from './components/Home';
import Post from './components/Post';
import Login from './components/Login';
import Signup from './components/Signup';
import { fakeAuth } from './components/Menu';

const PrivateRoute = ({component:Component,...rest}) =>(
    <Route {...rest} render={(props)=>(
        fakeAuth.isAuthenticated === true
        ?<Component {...props} />
        :<Redirect to='/Login' />
    )} />
)

const Routes = () =>(
    <Switch>
        <Route exact path='/' component={Home} />
        {/* <Route path='/Post' component={Post} /> */}
        <Route path='/Login' component={Login} />
        <Route path='/Signup' component={Signup} />
        <PrivateRoute path='/Post' component={Post} />

    </Switch>

)

export default Routes;