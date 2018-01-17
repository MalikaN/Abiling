import React, {Component} from 'react';
import {Navbar,NavbarBrand } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Menu from './Menu';
import {Link} from 'react-router-dom';

class Header extends Component{
    render(){
        return(
            <div >
                {/* <Navbar color="faded" light expand="md">
                <NavbarBrand tag={Link} to='/'> Abiling</NavbarBrand>
                    <Menu/>
                </Navbar>  */}

            <Navbar className="navbar navbar-toggleable-md navbar-inverse bg-inverse">
                <NavbarBrand tag={Link} to='/'> Abiling</NavbarBrand>
                <Menu/>
            </Navbar>  
                          
            </div>
        );
    }
}
export default Header;