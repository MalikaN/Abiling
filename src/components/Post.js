import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import '../App.css';
import '../index.css';
import { Container, Row, Col,Grid } from 'reactstrap';

class Post extends Component{
    render(){
        return(
           <Container className="contain">
            Post Here
            </Container>
        );
    }
}

export default Post;