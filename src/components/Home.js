import React, {Component} from 'react';
import '../index.css';
import posts from '../posts.js';
import { Button, Card, CardImg, CardTitle, CardText,CardSubtitle, CardBody } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';


const col ={
    'float':'left',
    'padding':'10px'
};
const card ={
        'float':'left',
        'padding':'10px',
        'background-color': '#fff',
        'border-radius': '2px',
        'box-shadow': '0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12)', 
        'transition': 'box-shadow .25s',
        ':hover' :
        {'box-shadow': '7px 8px 17px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)'}   
};
   
class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {
             hovering : false,
        };
    }

    render(){
        const handleMouseEnter = () => this.setState({hovering : true});
        const handleMouseLeave = () => this.setState({hovering : false});
        return(
        <Container className="contain">
            <Row>
            {posts.map(function(post,i){
                return(
            <Col xs="6" sm="4" style={col}>
                <Card style={card.hover} onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
                    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
                    <CardBody>
                        <CardTitle>{post.first_name +" "+ post.last_name}</CardTitle>
                        <CardSubtitle>{post.email}</CardSubtitle>
                        <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                        <Button color="link">Readmore>></Button>
                    </CardBody>
                </Card>
            </Col>
                )
            })}  
         
            </Row>
        </Container>
        );
    }
}
export default Home;