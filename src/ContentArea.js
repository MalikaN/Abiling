import React, {Component} from 'react';
import './App.css';
import header from './Header.js';
import footer from './Footer.js';

class ContentArea extends Component{
    render(){
        return(
            <div>
            <header/>
            <div className="content-area">
           
           
            
            </div>
            <footer/>
            </div>
        );
    }
}
export default ContentArea;