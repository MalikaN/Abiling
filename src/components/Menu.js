import React,{Component} from 'react';
import {Nav,NavItem,NavLink,Button} from 'reactstrap';
import '../index.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from 'react-router-dom';

export const fakeAuth={
    isAuthenticated:false,
    authenticated(cb){
        this.isAuthenticated=true
        setTimeout(cb,100)
    },
    signout(cb) {
        this.isAuthenticated = false
        setTimeout(cb, 100) 
      }
}


class Menu  extends Component{

    render(){
      
        return(
            // <div>             
                <Nav className="navbar-nav mr-auto navbar-toggler-right">
                    <NavItem>
                        <NavLink tag={Link} to='/'>Home</NavLink>                        
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to='/Post'>Create Post</NavLink>
                    </NavItem>
                    (redirectToReferrer === true) ?
                    <NavItem>
                        <Button color="outline-primary" tag={Link} to='/Login'>Login</Button>
                    </NavItem>
                    : 
                    <NavItem>
                        <Button color="outline-primary" tag={Link} to='/Login'>Logout</Button>
                    </NavItem>
                    <NavItem>
                        <Button color="outline-primary" tag={Link} to='/Signup'>Signup</Button>
                    </NavItem>
                </Nav>
  
        );
    }
}
export default Menu;