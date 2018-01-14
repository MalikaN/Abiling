import React, {Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import ContentArea from './ContentArea';
import Post from './Post';



class Main extends Component{
    render(){
        return(
                <div>
                    <Header/>
                    <ContentArea/>
                    <Footer/>
                </div>
        );
    }
}
export default Main;