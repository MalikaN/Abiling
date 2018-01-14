import React, {Component} from 'react';
import '../App.css';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import Post from './Post';



const routes = (
    <Route>
      <Route path="/Post" component={Post}/>
    </Route>
  )
  

class ContentArea extends Component{
    render(){
        return( 
                <div className="content-area">
                    {this.props.children}
                </div>
        );
    }
}
export default ContentArea;