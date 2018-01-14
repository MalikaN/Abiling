import React, {Component} from 'react';
import '../App.css';
import Menu from './Menu';

class Header extends Component{
    render(){
        return(
            <div className="header">
            Header
            <Menu/>
            
            </div>
        );
    }
}
export default Header;