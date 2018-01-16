import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {NavbarBrand,Nav,NavItem,NavLink,Button} from 'reactstrap';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from 'react-router-dom';

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
                    <NavItem>
                        <Button color="outline-primary" tag={Link} to='/Login'>Login</Button>
                    </NavItem>
                    <NavItem>
                        <Button color="outline-primary" tag={Link} to='/Signup'>Signup</Button>
                    </NavItem>
                </Nav>

        );
    }
}
export default Menu;