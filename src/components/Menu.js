import React,{Component} from 'react';
import {Nav,NavItem,NavLink,Button} from 'reactstrap';
import '../index.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from 'react-router-dom';


class Menu extends Component{

    constructor(props) {
        super(props);
        this.state = {
            isAuthenticated: localStorage.getItem('token') ? true : false
        }
    }

    signOut(){
        localStorage.clear();
        this.setState({
            isAuthenticated: false
        })
    }

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
                    {!this.state.isAuthenticated ?
                        <NavItem>
                            <Button color="outline-primary" tag={Link} to='/Login'>Login</Button>
                        </NavItem>
                    :
                        <NavItem>
                            <Button color="outline-primary" onClick={()=>this.signOut()} tag={Link} to='/Login'>Logout</Button>
                        </NavItem> 
                    }
                    <NavItem>
                        <Button color="outline-primary" tag={Link} to='/Signup'>Signup</Button>
                    </NavItem>
                </Nav>
  
        );
    }
}
export default Menu;