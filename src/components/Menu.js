import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import '../App.css';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
// import Route from 'react-router-dom/Router';
import Main from './Main';
import Post from './Post';

class Menu  extends Component{
    render(){
        return(
            <Router>
            <div className="menu">
                <Link className="a a:hover" to='/'>Home</Link>
                <Link className="a a:hover" to='/Post'>Create Post</Link>
               
            </div>
            
            </Router>
        );
    }
}
export default Menu;