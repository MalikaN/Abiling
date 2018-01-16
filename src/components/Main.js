import React, {Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import Routes from '../Routes';

class Main extends Component{
    render(){
        return(
                <div>
                    <Header/>
                    <Routes/>
                    <Footer/>
                </div>
        );
    }
}
export default Main;