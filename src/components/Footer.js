import React, {Component} from 'react';
import '../App.css';
import {NavbarBrand,Nav,NavItem,NavLink} from 'reactstrap';

const container = {
    'paddingLeft':'500px',
    'color':'white'
};

class Footer extends Component{
    render(){
        return(
            <Nav className="navbar navbar-inverse bg-inverse">
                <div style={container}>
                    &copy; Abiling {new Date().getFullYear()}
                </div>
            </Nav>
        );
    }
}
export default Footer;