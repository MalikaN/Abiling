import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {NavbarBrand,Nav,NavItem,NavLink,Button} from 'reactstrap';
import '../index.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Link } from 'react-router-dom';
//import {hashHistory} from 'react-router';

class Menu  extends Component{

    validJWT(e){

        
            let jwt = localStorage.getItem('token');
            if (jwt) {
                //hashHistory.push('/Post');
                alert('hello');
            } 
            else{
                this.props.history.push('/Login');
                //alert('no');
            }

    }

    render(){
        return(
            // <div>             
                <Nav className="navbar-nav mr-auto navbar-toggler-right">
                    <NavItem>
                        <NavLink tag={Link} to='/'>Home</NavLink>                        
                    </NavItem>
                    <NavItem>
                        <Button  onClick={()=>this.validJWT()}>Create Post</Button>
                    </NavItem>
                    <NavItem>
                        <Button color="outline-primary" tag={Link} to='/Login' >Login</Button>
                    </NavItem>
                    <NavItem>
                        <Button color="outline-primary" tag={Link} to='/Signup'>Signup</Button>
                    </NavItem>
                </Nav>

        );
    }
}
export default Menu;